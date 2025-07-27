import axios from 'axios';
import qs from 'qs';
import { config } from './config.js';

const rapidapiClient = axios.create({
  baseURL: config.rapidapi.baseUrl,
  headers: {
    'x-rapidapi-key': config.rapidapi.key,
    'x-rapidapi-host': config.rapidapi.host
  }
});

export async function searchLinkedIn({ organization, jobTitles, page = 1 }) {
  const form = qs.stringify({
    company: organization,
    designation: jobTitles.join(','),
    page: String(page)
  });

  const response = await rapidapiClient.post(
    '/search_linkedIn.php',
    form,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );

  const raw = response.data.data || [];
  const slim = raw.slice(0, 5).map(item => ({
    name: item.title?.text || null,
    jobTitle: item.primarySubtitle?.text || null,
    linkedinUrl: item.navigationUrl || null
  }));

  return {
    results: slim,
    meta: {
      organization,
      jobTitles,
      returned: slim.length
    }
  };
}

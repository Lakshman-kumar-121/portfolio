import {createClient }from '@supabase/supabase-js';
const SupbaseClient = createClient(
    "https://duxxzzedebybxrvnpwha.supabase.co", // Replace with your Supabase project URL
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eHh6emVkZWJ5Ynhydm5wd2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNTU1MzUsImV4cCI6MjAwODczMTUzNX0.6qkkwZA05Y8FsTjnXqGLNKYSBy83x4UKgFgDL2Zn2Ds" // Replace with your Supabase project API key 
)
 
export default SupbaseClient;
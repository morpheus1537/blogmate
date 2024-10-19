// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/blogmate-ai
import { Client } from "@gadget-client/blogmate-ai";

export const api = new Client({ environment: window.gadgetConfig.environment });ss

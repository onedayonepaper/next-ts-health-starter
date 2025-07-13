// Configuration for UploadThing
export const uploadthingConfig = {
  // Production token - fallback when environment variable is not set
  token: process.env.UPLOADTHING_TOKEN || 'eyJhcGlLZXkiOiJza19saXZlXzNlOTY5NDI1OTU5MmRhODM3OWFmMTIwMTE5Y2YxNGQ4ZGY0MDVlYzA3ZGQ3MmNhMzZiZmRjNTYwNzVhN2RlOWIiLCJhcHBJZCI6Ind1c2tybXhzeXMiLCJyZWdpb25zIjpbInNlYTEiXX0=',
  
  // Additional config options can be added here
  maxFileSize: "512MB" as const,
  maxFileCount: 1,
  allowedFileTypes: ["video"] as const,
};
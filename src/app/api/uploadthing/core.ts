import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  videoUploader: f({
    video: { 
      maxFileSize: "128MB", 
      maxFileCount: 1
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      // You can authenticate here if needed
      
      // For now, we'll allow all uploads
      // In production, you might want to check user authentication here
      
      return { 
        // Whatever is returned here is accessible in onUploadComplete as `metadata`
        uploadedAt: new Date().toISOString()
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.uploadedAt);
      console.log("file url", file.url);
      console.log("file name", file.name);
      console.log("file size", file.size);
      
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { 
        uploadedBy: metadata.uploadedAt,
        url: file.url,
        name: file.name,
        size: file.size,
        key: file.key
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
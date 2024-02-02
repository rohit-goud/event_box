import {
    generateReactHelpers,
    
} from "@uploadthing/react";

// Import the necessary module and its type declarations
import type { OurFileRouter } from "../app/api/uploadthing/core"
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();

//export const UploadButton = generateUploadButton<OurFileRouter>();
//export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

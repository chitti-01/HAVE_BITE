import React, { useState, useRef, useCallback, DragEvent } from 'react';
import { UploadCloudIcon, CameraIcon, TrashIcon } from './icons';

interface ImageUploaderProps {
  onFileChange: (file: File | null) => void;
  className?: string;
  label?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
    onFileChange, 
    className = '', 
    label = 'Upload a photo' 
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onFileChange(file);
    } else {
      setImagePreview(null);
      onFileChange(null);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleFile(file);
    event.target.value = ''; // Reset input
  };
  
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] || null;
    handleFile(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    onFileChange(null);
  };

  return (
    <div className={`w-full ${className}`}>
        <label className="block text-sm font-medium text-dark-text mb-1">{label}</label>
      {imagePreview ? (
        <div className="relative group">
          <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
          <button
            onClick={removeImage}
            type="button"
            aria-label="Remove image"
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors opacity-0 group-hover:opacity-100"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div 
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${isDragging ? 'border-primary bg-secondary/20' : 'border-dark-text/20'}`}
        >
          <UploadCloudIcon className="mx-auto h-12 w-12 text-dark-text/60" />
          <p className="mt-2 text-sm text-dark-text/90">
            Drag & drop or{' '}
            <button type="button" onClick={() => fileInputRef.current?.click()} className="font-semibold text-primary hover:underline focus:outline-none">
              browse files
            </button>
          </p>
          <p className="text-xs text-dark-text/75 mt-1">PNG, JPG, GIF up to 10MB</p>
          <div className="mt-4 flex justify-center">
             <button type="button" onClick={() => cameraInputRef.current?.click()} className="flex items-center gap-2 bg-white border border-dark-text/20 text-dark-text px-4 py-2 rounded-md hover:bg-dark-text/5 text-sm font-medium">
                <CameraIcon className="w-5 h-5" /> Take Photo
             </button>
          </div>
          <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
          <input type="file" ref={cameraInputRef} onChange={handleFileSelect} accept="image/*" capture="environment" className="hidden" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
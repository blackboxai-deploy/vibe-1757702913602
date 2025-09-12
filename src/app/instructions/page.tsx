import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'How to Use ImageToText - Complete OCR Guide | Text Extraction Tutorial',
  description: 'Learn how to use ImageToText OCR platform effectively. Step-by-step instructions for single and batch text extraction, best practices, and troubleshooting tips.',
  keywords: ['OCR instructions', 'how to extract text', 'ImageToText guide', 'OCR tutorial', 'text extraction help', 'batch processing guide'],
  openGraph: {
    title: 'ImageToText User Guide - Complete OCR Instructions',
    description: 'Master text extraction with our comprehensive guide. Learn single and batch processing, optimization tips, and troubleshooting.',
  },
};

export default function InstructionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              User Instructions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn how to get the most out of ImageToText OCR platform. From basic text extraction 
            to advanced batch processing, we'll guide you through every feature.
          </p>
        </div>

        {/* Quick Start */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Quick Start Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold">Upload Image</h4>
                <p className="text-sm text-muted-foreground">
                  Drag & drop or click to select your image file
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-semibold">AI Processing</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI extracts text in seconds
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold">Copy & Use</h4>
                <p className="text-sm text-muted-foreground">
                  Copy text or download as file
                </p>
              </div>
            </div>
            <div className="text-center pt-4">
              <Button asChild>
                <a href="/">Try It Now</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Instructions */}
        <div className="space-y-8">
          {/* Single Image Processing */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">Method 1</Badge>
                Single Image Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Step 1: Upload Your Image</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Click the "Single Image" tab on the homepage</li>
                    <li>• Drag and drop your image into the upload area, or click "Choose File"</li>
                    <li>• Supported formats: JPEG, PNG, WebP, GIF (max 10MB)</li>
                    <li>• The upload area will turn blue when dragging files over it</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-600 mb-2">Step 2: AI Text Extraction</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Processing begins automatically after upload</li>
                    <li>• Watch the progress indicator - usually completes in 2-5 seconds</li>
                    <li>• Our AI analyzes your image and extracts all visible text</li>
                    <li>• Processing time shows when complete</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-600 mb-2">Step 3: View & Use Results</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Extracted text appears in the text area below</li>
                    <li>• Click "Copy Text" to copy to your clipboard</li>
                    <li>• Click "Download TXT" to save as a text file</li>
                    <li>• Edit the text directly in the text area if needed</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <AlertDescription>
                  <strong>Pro Tip:</strong> Your extraction history is automatically saved and appears in the right sidebar. 
                  Click any previous result to view it again.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Batch Processing */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">Method 2</Badge>
                Batch Processing (Multiple Images)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-600 mb-2">Step 1: Select Batch Mode</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Click the "Batch Processing" tab on the homepage</li>
                    <li>• Upload area now accepts multiple files (up to 10 images)</li>
                    <li>• Select multiple files at once or drag them all together</li>
                    <li>• Each image can be up to 10MB in size</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-600 mb-2">Step 2: Monitor Processing Queue</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• All uploaded images appear in the processing queue</li>
                    <li>• Up to 3 images process simultaneously for speed</li>
                    <li>• Watch individual progress bars for each image</li>
                    <li>• Green checkmark = completed, red X = failed</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-teal-600 mb-2">Step 3: Review Batch Results</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Results appear in the right panel organized by status</li>
                    <li>• "Completed" tab shows all successful extractions</li>
                    <li>• "Failed" tab shows any processing errors</li>
                    <li>• "Combined Text" tab shows all results merged together</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Step 4: Export Results</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Choose export format: TXT, CSV, or JSON</li>
                    <li>• Click "Export" to download all results as one file</li>
                    <li>• Use "Copy All" to copy combined text to clipboard</li>
                    <li>• Individual results can be copied separately</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <AlertDescription>
                  <strong>Batch Processing Benefits:</strong> Perfect for digitizing multiple documents, processing 
                  screenshots in bulk, or converting multiple images from the same source.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Best Practices */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Best Practices for Optimal Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600">✅ Do This</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Use high-resolution images (300+ DPI recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Ensure good contrast between text and background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Keep images straight and properly aligned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Crop images to focus on text areas when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Use good lighting without shadows or glare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Save images in PNG or JPEG format for best results</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-red-600">❌ Avoid This</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Blurry or out-of-focus images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Images with heavy shadows or poor lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Extremely small text (less than 12pt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Heavily distorted or angled images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Images with watermarks over text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Files larger than 10MB (will be rejected)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supported Content */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>What Content Can Be Extracted?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Documents</h4>
                <p className="text-sm text-muted-foreground">
                  PDFs, contracts, reports, letters, forms, invoices
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Screenshots</h4>
                <p className="text-sm text-muted-foreground">
                  Software interfaces, websites, error messages, code
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Photos</h4>
                <p className="text-sm text-muted-foreground">
                  Signs, whiteboards, business cards, handwritten notes
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-semibold">Receipts & Bills</h4>
                <p className="text-sm text-muted-foreground">
                  Shopping receipts, utility bills, financial statements
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Books & Articles</h4>
                <p className="text-sm text-muted-foreground">
                  Book pages, magazine articles, academic papers
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-indigo-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h4 className="font-semibold">Multi-Language</h4>
                <p className="text-sm text-muted-foreground">
                  50+ languages including English, Spanish, French, Chinese
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              Troubleshooting Common Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-red-600">❌ "No text detected in image"</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check if image actually contains readable text</li>
                  <li>• Try increasing image brightness/contrast</li>
                  <li>• Ensure text is not too small (minimum 12pt recommended)</li>
                  <li>• Remove any watermarks or overlays blocking text</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-orange-600">⚠️ "Extracted text contains errors"</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Try uploading a higher resolution version</li>
                  <li>• Improve lighting conditions when taking photos</li>
                  <li>• Straighten rotated or skewed images before uploading</li>
                  <li>• Use the editable text area to manually correct errors</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-yellow-600">⏳ "Processing is taking too long"</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Large images (&gt;5MB) may take longer to process</li>
                  <li>• Check your internet connection</li>
                  <li>• Try refreshing the page and uploading again</li>
                  <li>• For batch processing, try smaller batches (3-5 images)</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-blue-600">🔧 "File upload failed"</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check file size (must be under 10MB)</li>
                  <li>• Ensure file format is supported (JPEG, PNG, WebP, GIF)</li>
                  <li>• Try a different browser if issues persist</li>
                  <li>• Clear browser cache and cookies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Get Help CTA */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Still Need Help?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Can't find what you're looking for? Check our FAQ section for detailed answers 
              or contact our support team for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild>
                <a href="/faq">View FAQ</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
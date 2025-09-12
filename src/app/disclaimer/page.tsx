import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Disclaimer - Service Limitations | ImageToText OCR Platform',
  description: 'Important disclaimers about ImageToText OCR service limitations, accuracy expectations, and legal liability. Understand service boundaries.',
  keywords: ['disclaimer', 'service limitations', 'OCR accuracy', 'liability disclaimer', 'ImageToText limitations'],
  openGraph: {
    title: 'ImageToText Disclaimer - Service Limitations & Legal Notice',
    description: 'Important information about service limitations, accuracy expectations, and legal disclaimers for ImageToText OCR platform.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Disclaimer
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Badge variant="outline">Version 1.0</Badge>
          </div>
        </div>

        {/* Important Notice */}
        <Alert variant="destructive">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <AlertDescription>
            <strong>Important:</strong> Please read this disclaimer carefully before using ImageToText OCR services. 
            This disclaimer outlines the limitations of our service and your responsibilities as a user.
          </AlertDescription>
        </Alert>

        {/* General Disclaimer */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>General Service Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              The information and services provided by ImageToText ("we", "us", "our") through our optical character 
              recognition (OCR) platform are offered on an "as is" and "as available" basis. While we strive to provide 
              accurate and reliable text extraction services, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability of our services.
            </p>
            <p>
              Your use of our OCR platform and reliance on any extracted text is solely at your own risk. We shall not be 
              liable for any loss or damage, including without limitation, indirect or consequential loss or damage, 
              or any loss or damage whatsoever arising from your use of our services.
            </p>
          </CardContent>
        </Card>

        {/* Accuracy Limitations */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>1. OCR Accuracy and Limitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">1.1 Accuracy Variability</h4>
            <p>
              While our AI-powered OCR technology achieves high accuracy rates (typically over 95%), the actual accuracy 
              depends on numerous factors including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Image quality and resolution</li>
              <li>Text clarity and font type</li>
              <li>Lighting conditions and contrast</li>
              <li>Language and character set</li>
              <li>Document layout and formatting</li>
              <li>Presence of graphics, watermarks, or noise</li>
            </ul>

            <h4 className="font-semibold text-foreground">1.2 No Guarantee of Perfect Results</h4>
            <p>
              We do not guarantee 100% accuracy in text extraction. Users are responsible for reviewing and verifying 
              all extracted text before using it for any critical applications, legal documents, or important business purposes.
            </p>

            <h4 className="font-semibold text-foreground">1.3 Complex Content Limitations</h4>
            <p>
              Our service may have reduced accuracy or may not work effectively with:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Handwritten text or cursive writing</li>
              <li>Highly stylized or decorative fonts</li>
              <li>Text in images with poor quality or extreme angles</li>
              <li>Mathematical formulas, equations, or special symbols</li>
              <li>Complex table layouts or multi-column formats</li>
              <li>Text embedded in graphics or artistic layouts</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>2. User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">2.1 Content Verification</h4>
            <p>
              Users are solely responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Reviewing all extracted text for accuracy and completeness</li>
              <li>Verifying results against original source documents</li>
              <li>Making necessary corrections before using extracted text</li>
              <li>Ensuring extracted content meets their specific requirements</li>
            </ul>

            <h4 className="font-semibold text-foreground">2.2 Appropriate Use</h4>
            <p>
              Users must ensure they have the right to process uploaded images and must not use our service for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Processing copyrighted material without proper authorization</li>
              <li>Extracting text from confidential or sensitive documents without permission</li>
              <li>Any illegal, harmful, or inappropriate purposes</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>

            <h4 className="font-semibold text-foreground">2.3 Data Security</h4>
            <p>
              While we implement security measures, users should:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Avoid uploading highly sensitive or confidential information</li>
              <li>Use additional security measures for critical documents</li>
              <li>Understand the risks of transmitting data over the internet</li>
            </ul>
          </CardContent>
        </Card>

        {/* Technical Limitations */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>3. Technical Service Limitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">3.1 Service Availability</h4>
            <p>
              We strive to maintain high service availability, but we do not guarantee uninterrupted service. 
              The service may be temporarily unavailable due to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Scheduled maintenance and updates</li>
              <li>Technical difficulties or system failures</li>
              <li>Internet connectivity issues</li>
              <li>Circumstances beyond our reasonable control</li>
            </ul>

            <h4 className="font-semibold text-foreground">3.2 Processing Limitations</h4>
            <p>
              Our service has technical limitations including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Maximum file size of 10MB per image</li>
              <li>Batch processing limited to 10 images at once</li>
              <li>Supported file formats: JPEG, PNG, WebP, GIF only</li>
              <li>Processing time may vary based on image complexity and server load</li>
            </ul>

            <h4 className="font-semibold text-foreground">3.3 Browser Compatibility</h4>
            <p>
              Our service is optimized for modern web browsers. Older browsers or those with certain security 
              settings may experience reduced functionality or compatibility issues.
            </p>
          </CardContent>
        </Card>

        {/* Legal and Liability Disclaimer */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>4. Legal and Liability Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">4.1 No Professional Advice</h4>
            <p>
              Our OCR service is a technical tool and does not constitute professional advice of any kind. 
              Users should not rely solely on extracted text for legal, medical, financial, or other professional decisions 
              without proper verification and consultation with qualified professionals.
            </p>

            <h4 className="font-semibold text-foreground">4.2 Limitation of Liability</h4>
            <p>
              To the fullest extent permitted by law, ImageToText shall not be liable for any direct, indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Costs of procurement of substitute services</li>
              <li>Business interruption or operational delays</li>
              <li>Any damages arising from inaccurate OCR results</li>
              <li>Damages resulting from service unavailability</li>
            </ul>

            <h4 className="font-semibold text-foreground">4.3 Indemnification</h4>
            <p>
              Users agree to indemnify and hold harmless ImageToText and its affiliates from any claims, 
              damages, losses, or expenses arising from their use of our services or violation of these terms.
            </p>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>5. Third-Party Services and Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">5.1 Third-Party Dependencies</h4>
            <p>
              Our service relies on third-party AI models, cloud infrastructure, and other services. 
              We are not responsible for the performance, availability, or security of these third-party services.
            </p>

            <h4 className="font-semibold text-foreground">5.2 External Links</h4>
            <p>
              Our website may contain links to external websites or services. We are not responsible for 
              the content, privacy practices, or terms of these external sites.
            </p>
          </CardContent>
        </Card>

        {/* Data and Privacy */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>6. Data Processing Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">6.1 AI Processing</h4>
            <p>
              Our service uses artificial intelligence and machine learning models to process your images. 
              While these models are advanced, they may occasionally produce unexpected or inaccurate results.
            </p>

            <h4 className="font-semibold text-foreground">6.2 Data Handling</h4>
            <p>
              While we implement security measures and do not permanently store user content, we cannot guarantee 
              absolute security of data during transmission or processing. Users should assess their own risk tolerance 
              before uploading sensitive information.
            </p>

            <h4 className="font-semibold text-foreground">6.3 Content Responsibility</h4>
            <p>
              Users are responsible for ensuring they have the legal right to upload and process any images 
              submitted to our service. We are not responsible for any copyright, privacy, or other legal 
              violations resulting from user-uploaded content.
            </p>
          </CardContent>
        </Card>

        {/* Changes and Updates */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>7. Changes to This Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              We reserve the right to update or modify this disclaimer at any time without prior notice. 
              Changes will be effective immediately upon posting on our website. Users are responsible for 
              reviewing this disclaimer periodically for updates.
            </p>
            <p>
              Continued use of our service after any changes constitutes acceptance of the updated disclaimer.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>8. Questions and Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              If you have questions about this disclaimer or our service limitations, please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p><strong>Email:</strong> legal@imagetotext.ai</p>
              <p><strong>Support:</strong> support@imagetotext.ai</p>
              <p><strong>Website:</strong> <a href="/" className="text-primary hover:underline">imagetotext.ai</a></p>
            </div>
          </CardContent>
        </Card>

        {/* Final Notice */}
        <Alert>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <AlertDescription>
            <strong>Final Reminder:</strong> By using ImageToText OCR services, you acknowledge that you have read, 
            understood, and accept the limitations and disclaimers outlined above. Always verify extracted text 
            for critical applications.
          </AlertDescription>
        </Alert>

        {/* Footer Links */}
        <div className="text-center pt-8">
          <div className="flex justify-center gap-4">
            <a 
              href="/terms" 
              className="text-sm text-primary hover:underline"
            >
              Terms of Service
            </a>
            <a 
              href="/privacy" 
              className="text-sm text-primary hover:underline"
            >
              Privacy Policy
            </a>
            <a 
              href="/contact" 
              className="text-sm text-primary hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
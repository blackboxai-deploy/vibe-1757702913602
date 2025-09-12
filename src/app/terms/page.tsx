import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Legal Agreement | ImageToText OCR Platform',
  description: 'Read the terms and conditions for using ImageToText OCR platform. Understand your rights, responsibilities, and our service limitations.',
  keywords: ['terms of service', 'user agreement', 'ImageToText terms', 'OCR platform legal', 'terms and conditions'],
  openGraph: {
    title: 'ImageToText Terms and Conditions - User Agreement',
    description: 'Legal terms and conditions for using the ImageToText OCR platform. Understand usage rights and service limitations.',
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Badge variant="outline">Version 1.0</Badge>
          </div>
        </div>

        {/* Introduction */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with 
              ImageToText OCR platform (the "Service") operated by ImageToText ("us", "we", or "our").
            </p>
            <p>
              Please read these Terms and Conditions carefully before using our Service. Your access to and use of 
              the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to 
              all visitors, users and others who access or use the Service.
            </p>
            <p className="font-medium text-foreground">
              By accessing and using the Service, you agree to be bound by these Terms. If you disagree with 
              any part of these terms, then you may not access the Service.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>1. Service Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              ImageToText is an AI-powered Optical Character Recognition (OCR) platform that allows users to 
              extract text from images. Our Service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Single image text extraction</li>
              <li>Batch processing of multiple images</li>
              <li>Support for various image formats (JPEG, PNG, WebP, GIF)</li>
              <li>Text export functionality (TXT, CSV, JSON)</li>
              <li>Processing history and management</li>
            </ul>
            <p>
              The Service is provided "as is" and we reserve the right to modify, suspend, or discontinue 
              any part of the Service at any time without notice.
            </p>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>2. User Responsibilities and Acceptable Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">2.1 Permitted Use</h4>
            <p>You may use our Service for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal document processing and text extraction</li>
              <li>Business document digitization</li>
              <li>Educational and research purposes</li>
              <li>Any lawful purpose that complies with these Terms</li>
            </ul>

            <h4 className="font-semibold text-foreground mt-6">2.2 Prohibited Use</h4>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Upload images containing illegal, harmful, or inappropriate content</li>
              <li>Process copyrighted material without proper authorization</li>
              <li>Attempt to reverse engineer or compromise the Service</li>
              <li>Use the Service to violate any applicable laws or regulations</li>
              <li>Upload malware, viruses, or other malicious code</li>
              <li>Abuse or overload our systems beyond reasonable use</li>
              <li>Share your access credentials with unauthorized parties</li>
            </ul>
          </CardContent>
        </Card>

        {/* Privacy and Data */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>3. Privacy and Data Handling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">3.1 Data Processing</h4>
            <p>
              When you use our Service, we process your uploaded images to extract text content. 
              This processing is performed using AI models hosted on secure servers.
            </p>

            <h4 className="font-semibold text-foreground">3.2 Data Retention</h4>
            <p>
              We do not permanently store your uploaded images or extracted text on our servers. 
              Processing is performed in real-time and data is automatically deleted after processing completion.
            </p>

            <h4 className="font-semibold text-foreground">3.3 Privacy Policy</h4>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of the Service, to understand our practices.
            </p>
          </CardContent>
        </Card>

        {/* Service Limitations */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>4. Service Limitations and Availability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">4.1 Technical Limitations</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Maximum file size: 10MB per image</li>
              <li>Batch processing limit: 10 images per batch</li>
              <li>Supported formats: JPEG, PNG, WebP, GIF</li>
              <li>OCR accuracy depends on image quality and content</li>
            </ul>

            <h4 className="font-semibold text-foreground">4.2 Service Availability</h4>
            <p>
              While we strive to maintain high availability, we do not guarantee that the Service will be 
              available 100% of the time. The Service may be temporarily unavailable due to maintenance, 
              technical issues, or circumstances beyond our control.
            </p>

            <h4 className="font-semibold text-foreground">4.3 Accuracy Disclaimer</h4>
            <p>
              OCR accuracy depends on various factors including image quality, text clarity, and content type. 
              We do not guarantee 100% accuracy in text extraction and recommend reviewing all extracted content.
            </p>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>5. Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">5.1 Service Ownership</h4>
            <p>
              The Service and its original content, features, and functionality are owned by ImageToText and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h4 className="font-semibold text-foreground">5.2 User Content</h4>
            <p>
              You retain all rights to the images you upload and the text extracted from them. By using our Service, 
              you grant us a limited license to process your content solely for the purpose of providing the OCR service.
            </p>

            <h4 className="font-semibold text-foreground">5.3 Feedback</h4>
            <p>
              Any feedback, suggestions, or improvements you provide regarding our Service may be used by us 
              without any obligation to compensate you.
            </p>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>6. Disclaimers and Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">6.1 Service Disclaimer</h4>
            <p>
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO REPRESENTATIONS OR 
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE USE OR RESULTS OF THE SERVICE IN TERMS 
              OF ITS CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
            </p>

            <h4 className="font-semibold text-foreground">6.2 Limitation of Liability</h4>
            <p>
              IN NO EVENT SHALL IMAGETOTEXT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
              OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR 
              OTHER INTANGIBLE LOSSES, ARISING OUT OF YOUR USE OF THE SERVICE.
            </p>

            <h4 className="font-semibold text-foreground">6.3 Maximum Liability</h4>
            <p>
              Our total liability to you for any claims arising out of or relating to these Terms or your use 
              of the Service shall not exceed $100 USD.
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>7. Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will cease immediately. All provisions of 
              the Terms which by their nature should survive termination shall survive termination.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>8. Governing Law and Disputes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">8.1 Governing Law</h4>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of California, 
              United States, without regard to its conflict of law provisions.
            </p>

            <h4 className="font-semibold text-foreground">8.2 Dispute Resolution</h4>
            <p>
              Any disputes arising out of or relating to these Terms or the Service shall be resolved 
              through binding arbitration in accordance with the Commercial Arbitration Rules of the 
              American Arbitration Association.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>9. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new 
              terms taking effect.
            </p>
            <p>
              What constitutes a material change will be determined at our sole discretion. By continuing 
              to access or use our Service after those revisions become effective, you agree to be bound 
              by the revised terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>10. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p><strong>Email:</strong> legal@imagetotext.ai</p>
              <p><strong>Address:</strong> San Francisco, CA, United States</p>
              <p><strong>Website:</strong> <a href="/" className="text-primary hover:underline">imagetotext.ai</a></p>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Footer Notice */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-sm text-muted-foreground">
            By using ImageToText, you acknowledge that you have read and understood these Terms and Conditions 
            and agree to be bound by them.
          </p>
          <div className="flex justify-center gap-4">
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
              Contact Us
            </a>
            <a 
              href="/faq" 
              className="text-sm text-primary hover:underline"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
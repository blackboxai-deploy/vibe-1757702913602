import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & Security | ImageToText OCR',
  description: 'Learn how ImageToText protects your privacy and handles your data. Our commitment to security, data protection, and user privacy.',
  keywords: ['privacy policy', 'data protection', 'ImageToText privacy', 'OCR data security', 'user privacy'],
  openGraph: {
    title: 'ImageToText Privacy Policy - Your Data Protection',
    description: 'Understand how we protect your privacy and secure your data when using ImageToText OCR platform.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Badge variant="outline">Version 1.0</Badge>
          </div>
        </div>

        {/* Privacy Commitment */}
        <Alert>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <AlertDescription>
            <strong>Privacy First:</strong> We are committed to protecting your privacy. Your images are processed securely 
            and never stored permanently on our servers. All processing is done in real-time with automatic data deletion.
          </AlertDescription>
        </Alert>

        {/* Introduction */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Our Commitment to Your Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              ImageToText ("we", "our", or "us") is committed to protecting and respecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our OCR platform and services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
              please do not access or use our services.
            </p>
            <p className="font-medium text-foreground">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. 
              We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">1.1 Images You Upload</h4>
            <p>
              When you use our OCR service, you upload images that may contain text. These images are processed 
              by our AI systems to extract text content. <strong>Important:</strong> We do not permanently store 
              these images on our servers.
            </p>

            <h4 className="font-semibold text-foreground">1.2 Extracted Text Data</h4>
            <p>
              The text extracted from your images is temporarily held in memory during processing and is 
              automatically deleted after your session ends. We do not maintain a database of extracted text.
            </p>

            <h4 className="font-semibold text-foreground">1.3 Technical Information</h4>
            <p>We may automatically collect certain technical information, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP address and general geographic location</li>
              <li>Browser type and version</li>
              <li>Device information (type, operating system)</li>
              <li>Usage statistics (pages visited, features used)</li>
              <li>Performance data (processing times, error rates)</li>
            </ul>

            <h4 className="font-semibold text-foreground">1.4 Local Storage</h4>
            <p>
              Your browser may store some information locally, such as your processing history and preferences. 
              This data remains on your device and is not transmitted to our servers.
            </p>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>2. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>We use the information we collect for the following purposes:</p>
            
            <h4 className="font-semibold text-foreground">2.1 Service Provision</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Processing your images to extract text content</li>
              <li>Providing OCR results and functionality</li>
              <li>Enabling batch processing capabilities</li>
              <li>Delivering exported text files</li>
            </ul>

            <h4 className="font-semibold text-foreground">2.2 Service Improvement</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Analyzing usage patterns to improve our service</li>
              <li>Monitoring system performance and reliability</li>
              <li>Identifying and fixing technical issues</li>
              <li>Developing new features and enhancements</li>
            </ul>

            <h4 className="font-semibold text-foreground">2.3 Security and Compliance</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Protecting against fraudulent or malicious activity</li>
              <li>Ensuring system security and data protection</li>
              <li>Complying with legal requirements and regulations</li>
              <li>Investigating potential violations of our terms</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Processing and Storage */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>3. Data Processing and Storage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">3.1 Real-Time Processing</h4>
            <p>
              All OCR processing is performed in real-time. Your images are analyzed by our AI systems and 
              text is extracted immediately. This process typically takes 2-5 seconds per image.
            </p>

            <h4 className="font-semibold text-foreground">3.2 Automatic Data Deletion</h4>
            <p>
              <strong>No Permanent Storage:</strong> Your uploaded images and extracted text are automatically 
              deleted from our servers immediately after processing is complete. We do not maintain any 
              permanent copies of your content.
            </p>

            <h4 className="font-semibold text-foreground">3.3 Temporary Processing Cache</h4>
            <p>
              During active processing, data may be temporarily held in encrypted memory caches to ensure 
              optimal performance. This data is automatically purged within minutes of processing completion.
            </p>

            <h4 className="font-semibold text-foreground">3.4 Data Location</h4>
            <p>
              Processing occurs on secure cloud infrastructure located in the United States. All data 
              transmission is encrypted using industry-standard protocols.
            </p>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>4. Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">4.1 Third-Party Service Providers</h4>
            <p>
              We may share information with trusted third-party service providers who assist us in operating 
              our platform, including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cloud hosting and infrastructure providers</li>
              <li>AI model and processing services</li>
              <li>Analytics and performance monitoring services</li>
              <li>Security and fraud prevention services</li>
            </ul>
            <p>
              These providers are bound by strict data protection agreements and may only use your information 
              to provide services to us.
            </p>

            <h4 className="font-semibold text-foreground">4.2 Legal Requirements</h4>
            <p>
              We may disclose your information if required to do so by law or in response to valid requests 
              by public authorities (e.g., court orders, government agencies).
            </p>

            <h4 className="font-semibold text-foreground">4.3 Business Transfers</h4>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred 
              to the acquiring entity, subject to the same privacy protections.
            </p>

            <h4 className="font-semibold text-foreground">4.4 What We Don't Share</h4>
            <p>We never:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Sell your personal information to third parties</li>
              <li>Share your images or extracted text for marketing purposes</li>
              <li>Use your content to train our AI models without explicit consent</li>
              <li>Provide your data to advertisers or data brokers</li>
            </ul>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>5. Security Measures</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">5.1 Data Encryption</h4>
            <p>
              All data transmission between your device and our servers is protected using industry-standard 
              TLS/SSL encryption. Data at rest is also encrypted using advanced encryption algorithms.
            </p>

            <h4 className="font-semibold text-foreground">5.2 Access Controls</h4>
            <p>
              Access to our systems is strictly controlled and limited to authorized personnel who require 
              access to perform their job functions. All access is logged and monitored.
            </p>

            <h4 className="font-semibold text-foreground">5.3 Infrastructure Security</h4>
            <p>
              Our platform is hosted on secure, SOC 2 compliant infrastructure with multiple layers of 
              security controls, including firewalls, intrusion detection, and regular security audits.
            </p>

            <h4 className="font-semibold text-foreground">5.4 Incident Response</h4>
            <p>
              We maintain a comprehensive incident response plan to quickly address any potential security 
              issues and will notify affected users if required by law.
            </p>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>6. Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">6.1 Data Control</h4>
            <p>
              Since we don't permanently store your images or extracted text, you maintain full control 
              over your data. Once processing is complete, your content is automatically deleted from our systems.
            </p>

            <h4 className="font-semibold text-foreground">6.2 Local Data Management</h4>
            <p>
              You can manage your local processing history and preferences through your browser settings. 
              This includes clearing stored history and adjusting privacy preferences.
            </p>

            <h4 className="font-semibold text-foreground">6.3 Opt-Out Rights</h4>
            <p>
              You can opt out of analytics tracking by adjusting your browser settings or using privacy tools 
              that block tracking cookies and scripts.
            </p>

            <h4 className="font-semibold text-foreground">6.4 Data Portability</h4>
            <p>
              Since processing results are immediately available for download in multiple formats (TXT, CSV, JSON), 
              you have complete data portability.
            </p>

            <h4 className="font-semibold text-foreground">6.5 Contact for Privacy Concerns</h4>
            <p>
              If you have questions about your privacy rights or how we handle your data, please contact us 
              at <strong>privacy@imagetotext.ai</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">7.1 Essential Cookies</h4>
            <p>
              We use essential cookies that are necessary for the website to function properly, including 
              session management and security features.
            </p>

            <h4 className="font-semibold text-foreground">7.2 Analytics Cookies</h4>
            <p>
              We may use analytics cookies to understand how users interact with our service and improve 
              performance. These cookies collect aggregated, anonymous information.
            </p>

            <h4 className="font-semibold text-foreground">7.3 Local Storage</h4>
            <p>
              We use browser local storage to save your processing history and preferences on your device. 
              This data is not transmitted to our servers.
            </p>

            <h4 className="font-semibold text-foreground">7.4 Cookie Management</h4>
            <p>
              You can control cookie preferences through your browser settings. Note that disabling certain 
              cookies may limit some functionality of our service.
            </p>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>8. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our service is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided personal information, please contact us immediately.
            </p>
            <p>
              If we become aware that we have collected personal information from children without verification 
              of parental consent, we will take steps to remove that information from our systems.
            </p>
          </CardContent>
        </Card>

        {/* International Users */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>9. International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our service is hosted in the United States. If you are accessing our service from outside 
              the United States, please be aware that your information may be transferred to, stored, 
              and processed in the United States.
            </p>
            <p>
              By using our service, you consent to the transfer of your information to the United States 
              and processing in accordance with this Privacy Policy.
            </p>
            <p>
              We implement appropriate safeguards to ensure your data is protected in accordance with 
              this Privacy Policy regardless of where it is processed.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>10. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              If you have questions or comments about this Privacy Policy, please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p><strong>Privacy Officer Email:</strong> privacy@imagetotext.ai</p>
              <p><strong>General Contact:</strong> support@imagetotext.ai</p>
              <p><strong>Address:</strong> San Francisco, CA, United States</p>
              <p><strong>Website:</strong> <a href="/" className="text-primary hover:underline">imagetotext.ai</a></p>
            </div>
            <p>
              We will respond to your privacy-related inquiries within 30 days of receipt.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Footer Notice */}
        <div className="text-center space-y-4 pt-8">
          <Alert>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <AlertDescription>
              <strong>Remember:</strong> Your images are never permanently stored. All processing is done in real-time 
              with immediate data deletion after results are delivered to you.
            </AlertDescription>
          </Alert>
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="/terms" 
              className="text-sm text-primary hover:underline"
            >
              Terms of Service
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
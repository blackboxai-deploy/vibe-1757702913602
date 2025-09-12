import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'DMCA Copyright Policy - Copyright Protection | ImageToText',
  description: 'ImageToText DMCA copyright policy and takedown procedures. Learn how we handle copyright infringement claims and protect intellectual property.',
  keywords: ['DMCA policy', 'copyright protection', 'takedown notice', 'intellectual property', 'copyright infringement'],
  openGraph: {
    title: 'ImageToText DMCA Policy - Copyright Protection & Takedown',
    description: 'Our DMCA policy outlines how we handle copyright infringement claims and protect intellectual property rights.',
  },
};

export default function DMCAPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              DMCA Copyright Policy
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Digital Millennium Copyright Act Compliance
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Badge variant="outline">Version 1.0</Badge>
          </div>
        </div>

        {/* Overview */}
        <Alert>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <AlertDescription>
            <strong>Copyright Protection:</strong> ImageToText respects intellectual property rights and complies with the 
            Digital Millennium Copyright Act (DMCA). We respond promptly to valid takedown notices and protect creators' rights.
          </AlertDescription>
        </Alert>

        {/* Policy Overview */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Our Commitment to Copyright Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              ImageToText ("we", "us", "our") respects the intellectual property rights of others and expects users 
              to do the same. This policy outlines our procedures for addressing claims of copyright infringement 
              in accordance with the Digital Millennium Copyright Act (DMCA).
            </p>
            <p>
              While our OCR service processes images temporarily and does not store content permanently, we take 
              copyright protection seriously and will respond appropriately to valid DMCA notices.
            </p>
            <p className="font-medium text-foreground">
              Users are responsible for ensuring they have the legal right to upload and process any images 
              submitted to our service.
            </p>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>1. User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">1.1 Copyright Compliance</h4>
            <p>Before uploading any image to our service, users must ensure:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>They own the copyright to the image and its content</li>
              <li>They have explicit permission from the copyright holder</li>
              <li>The content is in the public domain</li>
              <li>Their use qualifies as fair use under applicable copyright law</li>
            </ul>

            <h4 className="font-semibold text-foreground">1.2 Prohibited Uses</h4>
            <p>Users may NOT upload images containing:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Copyrighted text, documents, or books without permission</li>
              <li>Screenshots of copyrighted software, websites, or applications</li>
              <li>Scanned pages from copyrighted publications</li>
              <li>Images containing copyrighted artwork or photographs</li>
              <li>Any content that infringes on third-party intellectual property rights</li>
            </ul>

            <h4 className="font-semibold text-foreground">1.3 License Grant</h4>
            <p>
              By uploading an image, users represent and warrant that they have the legal right to do so and 
              grant us a limited license to process the image solely for providing OCR services.
            </p>
          </CardContent>
        </Card>

        {/* DMCA Takedown Process */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>2. DMCA Takedown Notice Procedure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">2.1 Filing a DMCA Takedown Notice</h4>
            <p>
              If you believe that copyrighted material has been processed through our service in violation of your rights, 
              you may submit a DMCA takedown notice. Please note that due to the temporary nature of our processing 
              (images are not stored permanently), most content will have been automatically deleted.
            </p>

            <h4 className="font-semibold text-foreground">2.2 Required Information</h4>
            <p>A valid DMCA takedown notice must include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Identification of copyrighted work:</strong> A description of the copyrighted work you claim 
                has been infringed, or if multiple works are involved, a representative list
              </li>
              <li>
                <strong>Identification of infringing material:</strong> Specific description of where the allegedly 
                infringing material was located on our service, with sufficient detail for us to locate it
              </li>
              <li>
                <strong>Contact information:</strong> Your name, address, telephone number, and email address
              </li>
              <li>
                <strong>Good faith statement:</strong> A statement that you have a good faith belief that use of 
                the material is not authorized by the copyright owner, its agent, or the law
              </li>
              <li>
                <strong>Accuracy statement:</strong> A statement under penalty of perjury that the information is 
                accurate and that you are authorized to act on behalf of the copyright owner
              </li>
              <li>
                <strong>Electronic signature:</strong> Your physical or electronic signature
              </li>
            </ul>

            <h4 className="font-semibold text-foreground">2.3 How to Submit</h4>
            <p>Send your DMCA takedown notice to our designated agent:</p>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p><strong>DMCA Agent:</strong> Legal Department</p>
              <p><strong>Email:</strong> dmca@imagetotext.ai</p>
              <p><strong>Subject Line:</strong> DMCA Takedown Notice</p>
              <p><strong>Address:</strong> San Francisco, CA, United States</p>
            </div>
          </CardContent>
        </Card>

        {/* Response Process */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>3. Our Response Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">3.1 Notice Review</h4>
            <p>Upon receiving a DMCA takedown notice, we will:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Review the notice for completeness and validity</li>
              <li>Investigate the alleged infringement</li>
              <li>Take appropriate action if the notice is valid</li>
              <li>Respond to the complainant within 7 business days</li>
            </ul>

            <h4 className="font-semibold text-foreground">3.2 Actions We May Take</h4>
            <p>If we determine that a valid copyright infringement has occurred, we may:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Document the infringement for our records</li>
              <li>Implement measures to prevent similar infringement</li>
              <li>Issue warnings to the user who uploaded the content</li>
              <li>Restrict or suspend user access in cases of repeat infringement</li>
            </ul>

            <h4 className="font-semibold text-foreground">3.3 Limitations</h4>
            <p>
              Due to the temporary nature of our service (content is processed in real-time and automatically deleted), 
              we cannot remove specific content that has already been processed. However, we can take preventive 
              measures and address repeat offenders.
            </p>
          </CardContent>
        </Card>

        {/* Counter-Notice Process */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>4. Counter-Notice Procedure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">4.1 Filing a Counter-Notice</h4>
            <p>
              If you believe that a DMCA takedown notice was filed against you in error or that your use of the 
              material is authorized, you may file a counter-notice.
            </p>

            <h4 className="font-semibold text-foreground">4.2 Counter-Notice Requirements</h4>
            <p>A valid counter-notice must include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your name, address, phone number, and email address</li>
              <li>Identification of the material and its location before removal</li>
              <li>A statement under penalty of perjury that you have a good faith belief the material was removed due to mistake or misidentification</li>
              <li>Consent to jurisdiction of federal court in your district</li>
              <li>Agreement to accept service of process from the complainant</li>
              <li>Your physical or electronic signature</li>
            </ul>

            <h4 className="font-semibold text-foreground">4.3 Counter-Notice Submission</h4>
            <p>Send counter-notices to the same DMCA agent contact information listed above, with the subject line "DMCA Counter-Notice".</p>
          </CardContent>
        </Card>

        {/* Repeat Infringer Policy */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>5. Repeat Infringer Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">5.1 Three-Strike Policy</h4>
            <p>
              We maintain a policy for addressing repeat copyright infringers:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>First offense:</strong> Warning and education about copyright compliance</li>
              <li><strong>Second offense:</strong> Temporary suspension of service access</li>
              <li><strong>Third offense:</strong> Permanent termination of service access</li>
            </ul>

            <h4 className="font-semibold text-foreground">5.2 Account Termination</h4>
            <p>
              We reserve the right to terminate access for users who repeatedly infringe on copyright, 
              even if no formal DMCA notices have been filed.
            </p>

            <h4 className="font-semibold text-foreground">5.3 Appeals Process</h4>
            <p>
              Users who believe they have been wrongly identified as repeat infringers may appeal by 
              contacting our legal department with supporting documentation.
            </p>
          </CardContent>
        </Card>

        {/* Safe Harbor */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>6. Safe Harbor Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">6.1 Service Provider Status</h4>
            <p>
              ImageToText operates as a service provider under the DMCA's safe harbor provisions. We provide 
              automated technical services for processing user-uploaded content without exercising editorial control.
            </p>

            <h4 className="font-semibold text-foreground">6.2 Limitations of Liability</h4>
            <p>
              As a qualifying service provider, we are not liable for copyright infringement by our users, 
              provided we comply with DMCA requirements and respond appropriately to valid takedown notices.
            </p>

            <h4 className="font-semibold text-foreground">6.3 No Duty to Monitor</h4>
            <p>
              We have no general duty to monitor our service for copyright infringement, but we respond 
              promptly to properly formatted DMCA notices.
            </p>
          </CardContent>
        </Card>

        {/* Fair Use Considerations */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>7. Fair Use and Educational Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h4 className="font-semibold text-foreground">7.1 Fair Use Doctrine</h4>
            <p>
              We recognize that some uses of copyrighted material may qualify as fair use under copyright law. 
              Fair use factors include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Purpose and character of use (commercial vs. educational)</li>
              <li>Nature of the copyrighted work</li>
              <li>Amount and substantiality of the portion used</li>
              <li>Effect on the market for the original work</li>
            </ul>

            <h4 className="font-semibold text-foreground">7.2 Educational Use</h4>
            <p>
              We support legitimate educational and research uses of our OCR service, but users must still 
              comply with copyright law and fair use limitations.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>8. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>For all DMCA-related communications:</p>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p><strong>DMCA Designated Agent:</strong> Legal Department</p>
              <p><strong>Email:</strong> dmca@imagetotext.ai</p>
              <p><strong>Legal Email:</strong> legal@imagetotext.ai</p>
              <p><strong>General Support:</strong> support@imagetotext.ai</p>
              <p><strong>Address:</strong> San Francisco, CA, United States</p>
            </div>
            <p>
              Please ensure all DMCA notices include "DMCA" in the subject line and contain all required information 
              to ensure prompt processing.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Final Notice */}
        <Alert>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <AlertDescription>
            <strong>Important Notice:</strong> Filing false DMCA notices or counter-notices may result in legal liability. 
            Consult with legal counsel if you are uncertain about your rights or the validity of a claim.
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
              Contact Legal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "How to contact with riders emergency ?",
    contents: (
      <div>
        If you're unable to access the emergency number or emergency feature
        within the app, you can contact customer service for assistance. They
        can direct you to the appropriate source of help.
      </div>
    ),
  },
  {
    title: "App installation failed, how to update system information?",
    contents: (
      <div>
        <p>1. Check for Updates:</p>
        <p>
          Ensure that your device's operating system is up to date. Go to your
          device's settings, navigate to the "Software Update" or "System
          Update" section, and check for any available updates. If updates are
          available, download and install them.
        </p>

        <p>2. Clear Cache and Data:</p>
        <p>
          Sometimes, accumulated cache or corrupt data can interfere with app
          installations. Go to your device's settings, find the "Apps" or
          "Applications" section, locate the problematic app, and clear its
          cache and data. Then try reinstalling the app.
        </p>

        <p>3. Restart Your Device:</p>
        <p>
          A simple restart can often resolve many software-related issues.
          Restart your device and try installing the app again.
        </p>

        <p>4. Check Storage Space:</p>
        <p>
          Ensure that your device has sufficient storage space available for the
          app installation. Delete any unnecessary files or apps to free up
          space if needed.
        </p>

        <p>5. Check Internet Connection:</p>
        <p>
          Make sure you have a stable internet connection while installing the
          app. Switch to a different network or restart your router if
          necessary.
        </p>
      </div>
    ),
  },

  {
    title: `Website response taking time, how to improve?`,
    contents: (
      <div>
        Your website lives on a computer called a server, kind of like your
        website's apartment. If the apartment is too small or crowded, things
        get slow. Upgrading your server to a bigger, faster one can help your
        website run smoother.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}

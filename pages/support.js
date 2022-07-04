import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Support() {
  return (
    <div>
    <Navbar />
    <div className="pageCont">
      <div>
        Feel free to contact us at oxynware@gmail.com for any questions.
      </div>

      <h2>FAQ</h2>
      <div className="faq">
      <div className="faqQ">How do you handle payments and credit card information?</div>
      <div className="faqA">Payments are handled through Stripe. We do not handle or recieve your credit card information.</div>

      </div>

    </div>
      <Footer />
    </div>
  )
}
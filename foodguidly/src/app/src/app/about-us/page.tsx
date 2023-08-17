import BeforeFooter from "../components/BeforeFooter";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      <div className="w-full flex justify-center bg-gray-100">
        <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg">
          <section className="mb-8">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p>
              Welcome to foodGuidly – Your Ultimate Source for Culinary
              Inspiration and Healthy Living!
            </p>
            <p className="mt-4">
              At foodGuidly, we believe that food is not only about nourishment
              but also about exploration, creativity, and joy. Our platform is
              dedicated to providing you with a comprehensive resource for all
              things culinary, from delicious recipes that cater to your
              preferences to valuable insights on balanced nutrition, cooking
              techniques, and mindful consumption. We are committed to helping
              you achieve a vibrant and healthier lifestyle through the power of
              food.
            </p>
          </section>

          {/* ... (other sections with appropriate Tailwind CSS classes) ... */}

          <section>
            <h2 className="text-xl font-bold mb-4">Join Us on This Journey</h2>
            <p>
              We invite you to embark on a transformative journey towards a
              healthier and more vibrant lifestyle with foodGuidly. Whether
              you're a seasoned cook or a beginner in the kitchen, our platform
              has something for everyone. Let's explore the world of flavors,
              nutrition, and culinary creativity together.
            </p>
            <p className="mt-4">
              Thank you for choosing foodGuidly as your culinary companion.
              We're excited to be part of your journey towards better eating and
              a happier, healthier you.
            </p>
            <p className="mt-4">
              Stay connected with us for the latest recipes, tips, and insights.
              Together, we'll create a community that celebrates the joy of food
              and its incredible potential to enhance our lives.
            </p>
            <p className="mt-4">
              For any inquiries or suggestions, please don't hesitate to{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                contact us
              </a>
              . Your feedback is invaluable as we continue to improve and expand
              our platform.
            </p>
            <p className="mt-4">Bon appétit and happy cooking!</p>
            <p className="font-bold">The foodGuidly Team</p>
          </section>
        </div>
      </div>

      <Navigation />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

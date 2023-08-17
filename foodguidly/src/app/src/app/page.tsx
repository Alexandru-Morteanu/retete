import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BeforeFooter from "./components/BeforeFooter";

const Home: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      <main className="w-full flex justify-center bg-gray-100">
        <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg">
          <section className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Welcome to foodGuidly</h1>
            <p>
              Your source for culinary inspiration, nutritional advice, and
              healthy eating tips.
            </p>
            <p className="mt-4">
              Discover diverse recipes tailored to your preferences, fostering
              both taste exploration and health objectives.
            </p>
            <p className="mt-4">
              Explore insights on balanced nutrition, cooking techniques, and
              mindful consumption—all in one place. Embark on a journey to a
              vibrant, healthier lifestyle with FoodGuidly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Featured Recipes</h2>
            {/* Add your featured recipes here */}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Latest Articles</h2>
            {/* Add your latest articles here */}
          </section>
        </div>
      </main>
      <Navigation />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default Home;

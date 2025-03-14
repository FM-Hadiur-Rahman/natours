/* eslint-disable */
// const stripe = require('stripe')(
//   'pk_test_51R2B7t2fv8hkfN4d0nExcyxWf0wNjamFuoSIXF5EX9KQj8nf2fK4aYO3didN8zDsZUJ4uUC7CyJruRFFauddUwM700TyoVRPdb',
// );
const stripe = Stripe(
  'pk_test_51R2B7t2fv8hkfN4d0nExcyxWf0wNjamFuoSIXF5EX9KQj8nf2fK4aYO3didN8zDsZUJ4uUC7CyJruRFFauddUwM700TyoVRPdb',
);

const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    alert('error', err);
  }
};

const bookBtn = document.getElementById('book-tour');
if (bookBtn)
  bookBtn.addEventListener('click', (e) => {
    console.log('hello from payment ');
    e.target.textContent = 'Processing...';
    // const tourId = e.target.dataset.tourId;
    const { tourId } = e.target.dataset; //because of name "tourId" same we can destructuring this
    bookTour(tourId);
  });

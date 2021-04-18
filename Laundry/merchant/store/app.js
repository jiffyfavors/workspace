
export const state = () => ({
	apps:[{
        code: 'FOO',
        title: 'Online Food Ordering',
        desc: 'Accepts order online using your special link. Customer can pay Cash, Debit or Credit Card. ',
        token_required: false,
        balance_required: 800,
        pricing: [{
          mode: 'Cash-Based',
          value: '3.5% per order'
        }, {
          mode: 'Card-Based',
          value: '2.5% plus 4.4% for Payment Processing'
        }]
      },
      {
        code: 'eCom',
        title: 'Online Store',
        desc: 'Create low cost yet beautiful eCommerce website. Best for online sellers.',
        token_required: false,
        balance_required: 800,
        pricing: [{
          mode: 'Cash-Based',
          value: '3.5% per order'
        }, {
          mode: 'Card-Based',
          value: '2.5% plus 4.5% for Payment Processing'
        }]
      }]
})

export const getters =  {
	getApps(state){
		return state.apps
	}
}


// }, {
      //   code: 'MAS',
      //   title: 'Massage Appointment',
      //   desc: 'Accepts appoinment for massage sessions.',
      //   token_required: false,
      //   balance_required: 1500,
      //   pricing: [{
      //     mode: 'Cash-Based',
      //     value: '3.5% per invoice'
      //   }, {
      //     mode: 'Card-Based',
      //     value: '2.5% plus 4.5% for Payment Processing'
      //   }]
      // }, {
      //   code: 'H20',
      //   title: 'H₂0 Center',
      //   desc: 'Manage your Water Refilling Business with ease.',
      //   token_required: true,
      //   balance_required: 0,
      //   pricing: [{
      //     mode: 'Token Based',
      //     value: '2 Token per Order via Online'
      //   }, {
      //     mode: 'Token-Based',
      //     value: '1 Token per Order on Store Initiated Orders'
      //   }]
      // }, {
      //   code: 'LAU',
      //   title: 'Laundry Central',
      //   desc: 'Manage your Laundry Business with Ease with Electronic Invoicing.',
      //   token_required: true,
      //   balance_required: 0,
      //   pricing: [{
      //     mode: 'Token-Based',
      //     value: '5 Token per invoice'
      //   }, {
      //     mode: 'Card-Based',
      //     value: '7% on invoice payment paid by card'
      //   }]
      // }, 
      // }, {
      //   code: 'GYM',
      //   title: 'Fitness Central',
      //   desc: 'Manage your Fitness Gym Business with Ease. Manage Session-based and Subscription-based customers.',
      //   token_required: true,
      //   balance_required: 0,
      //   pricing: [{
      //     mode: 'Token Based',
      //     value: '5 Token per Session'
      //   }, {
      //     mode: 'Card-Based Based',
      //     value: '7% per Subscription(new/renewal) paid via Card'
      //   }]
      // }, {
      //   code: 'RES',
      //   title: 'Restaurant',
      //   desc: 'Create QR-Based self ordering Menu, table reservation and take out orders.',
      //   token_required: true,
      //   balance_required: 1000,
      //   pricing: [{
      //     mode: 'Table-Based',
      //     value: 'PHP 120/table on QR-Based Self Ordering'
      //   }, {
      //     mode: 'Token-Based',
      //     value: '10 Token per Table Reservation done online'
      //   }, {
      //     mode: 'Token-Based',
      //     value: '5 Token per Table Reservation via other channel'
      //   }, {
      //     mode: 'Cash-Based(Online Ordering)',
      //     value: '3.5% for every order'
      //   }, {
      //     mode: 'Card-Based(Online Ordering)',
      //     value: '2.5% plus 4.4% for Payment Processing'
      //   }]
      // }, {
      //   code: 'PRO',
      //   title: 'Prof. Advise',
      //   token_required: false,
      //   balance_required: 0,
      //   desc: 'Accept online and call-based counceling sessions. Best for Lawyers and Medical Professionals.',
      //   pricing: [{
      //     mode: 'Card',
      //     value: '10% per successful online councelling'
      //   }]
      // }, {
      //   code: 'REA',
      //   title: 'Real Estate Listing',
      //   desc: 'Create your Real Estate Listing Portfolio and have a lead generation source online.',
      //   token_required: true,
      //   balance_required: 0,
      //   pricing: [{
      //     mode: 'Token-Based',
      //     value: '10 Token for Every Lead Generated'
      //   }]
      // }]
// import React from 'react'
// import PropTypes from 'prop-types'
// import { PricingPageTemplate } from '../../templates/pricing-page'

// const PricingPagePreview = ({ entry, getAsset }) => {
//   const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
//   const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

//   return (
//     <PricingPageTemplate
//       pricing={{
//         heading: entry.getIn(['data', 'pricing', 'heading']),
//         description: entry.getIn(['data', 'pricing', 'description']),
//         plans: pricingPlans,
//       }}
//       image={entry.get(['data', 'image'])}
//       hours={{
//         heading: entry.getIn(['data', 'hours', 'heading']),
//         description: entry.getIn(['data', 'hours', 'description']),
//       }}
//     />
//   )
// }

// PricingPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// }

// export default PricingPagePreview

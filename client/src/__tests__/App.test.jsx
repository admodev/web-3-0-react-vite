import ReactTestUtils from 'react-dom/test-utils'
import App from '../App'

it('renders a navbar on App component', function () {
	var component = ReactTestUtils.renderIntoDocument(<App />)

	ReactTestUtils.findRenderedDOMComponentWithTag(component, 'Navbar')
})

import { Feature } from '../../components';
import './about.css';

const About = () => (
  <div className='abt_main' id='abtus'>
    <div className="abtus">
      <Feature title='About Us' text="Powered by state-of-the-art technology, Rently is the first of its kind, on-demand, car-rental marketplace geared to disrupt the traditional renting industry.

Rently’s car-rental services are available at your fingertips online, for a more modern and convenient customer experience"/>
    </div>
    <div className='features'>
      <Feature title="Qualified Staff" text="TravelHub provides excellent costumer service, the main reason for it is the excellent and experienced staff. They make their costumers feel at home and their experience worhwhile."/>
      <Feature title="Versatility" text="One of the biggest strengths of TravelHub is its versatility. Our wide-range of latest models and well-maintained cars, is suited for everyone and all occasions." />
      <Feature title="Quality" text="Quality is the cornerstone of TravelHub services, is ensured in every mile. We provide Excellent cars along with excellent experience which ensures Excellence." />
    </div>
    </div>
);

export default About

import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Pick and Drop Services',
    text: 'TravelHub provides Pick and Drop services inside a city, to another city and travels from and to Airports. We ensure that all aspects of travel are covered.',
  },
  {
    title: 'Wedding Services',
    text: 'We are foremost firmly engaged in providing our clients with luxurious as well as well-maintained cars on hire for weddings and other related functions.',
  },
  {
    title: 'Self Drive',
    text: 'We at TravelHub also provide our clients with good quality vehicle on timely basis. So that our clients can have a good time driving on their own.',
  },
  {
    title: 'Off-Roading Vehicles',
    text : 'TravelHub also provides rough and tough cars for our adventurous clients. Clients can hire these cars along with one of our experienced drivers or choose the self-drive option.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="services">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">"Sevices Provided by TravelHub"</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

import React from "react";
import mapboxgl from "mapbox-gl";
import $ from "jquery";
import algeria from "../../media/prologue/Algeria.gif";
import belarus from "../../media/prologue/Belarus.gif";
import bolivia from "../../media/prologue/Bolivia.gif";
import bulgaria from "../../media/prologue/Bulgaria.gif";
import catalonia from "../../media/prologue/Catalonia.gif";
import chile from "../../media/prologue/Chile.gif";
import colombia from "../../media/prologue/Colombia.gif";
import czechrepublic from "../../media/prologue/Czech Republic.gif";
import ecuador from "../../media/prologue/Ecuador.gif";
import france from "../../media/prologue/France.gif";
import guinea from "../../media/prologue/Guinea.gif";
import haiti from "../../media/prologue/Haiti.gif";
import honduras from "../../media/prologue/Honduras.gif";
import hongkong from "../../media/prologue/Hong Kong.gif";
import india from "../../media/prologue/India.gif";
import iraq from "../../media/prologue/Iraq.gif";
import lebanon from "../../media/prologue/Lebanon.gif";
import nigeria from "../../media/prologue/Nigeria.gif";
import sudan from "../../media/prologue/Sudan.gif";
import thailand from "../../media/prologue/Thailand.gif";
import usa from "../../media/prologue/USA.gif";
import venezuela from "../../media/prologue/Venezuela.gif";


// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
mapboxgl.accessToken = "pk.eyJ1IjoiY2hhcmxlc2luZ2VhIiwiYSI6ImNqcWpudGdsMDBwdmY0OXBvanQyaHN0MnoifQ._0O-n_18aXTVaue93HD6PQ"
const filters = ["Authoritarianism", "Corruption", "Police brutality", "Government inefficiency", "Economic inequalities"];

const protests = [{
  location: "Algeria",
  position: [3.058, 36.754],
  triggers: "President Abdelaziz Bouteflika’s decision to seek a fifth term as president.",
  motivations: "Economic downturn, corruption and nepotism, and desire for removal of entrenched military and political elites.",
  outcomes: "Bouteflika resigned. Military and political elites retained power in subsequent elections, triggering further unrest.",
  tags: "tag-0 tag-1",
  gif: algeria
}, {
  location: "Honduras",
  position: [-87.171, 14.065],
  triggers: "Proposed reforms to the education and healthcare sectors, and revelations that President Juan Orlando Hernández received contributions from drug traffickers.",
  motivations: "Government corruption, falling spending on public services, and widespread poverty despite economic growth.",
  outcomes: "Hernández withdrew the proposed legislation.",
  tags: "tag-1 tag-3 tag-4",
  gif: honduras
}, {
  location: "Czech Republic",
  position: [14.438, 50.076],
  triggers: "Corruption allegations against Prime Minister Andrej Babiš, and his appointment of a close ally as justice minister.",
  motivations: "Government corruption, threats to judicial independence, and democratic backslide.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-1",
  gif: czechrepublic
}, {
  location: "Hong Kong",
  position: [114.169, 22.319],
  triggers: "Introduction of a bill that would permit extradition of criminal suspects from Hong Kong to China.",
  motivations: "Erosion of Hong Kong’s one country, two systems autonomy from China, and restriction of civil liberties.",
  outcomes: "The Hong Kong government retracted the extradition bill. It also stepped back from postponing local council elections, which pro-democracy groups won.",
  tags: "tag-0",
  gif: hongkong
}, {
  location: "Iraq",
  position: [44.366, 33.315],
  triggers: "Demotion of a popular counterterrorism leader who was fighting government corruption.",
  motivations: "Inadequate public services, government corruption, unemployment, discontent with the country’s sectarian political system, Iranian influence in Iraq, and government repression of protests.",
  outcomes: "Prime Minister Adel Abdul-Mahdi resigned.",
  tags: "tag-1 tag-2 tag-3 tag-4",
  gif: iraq
}, {
  location: "Guinea",
  position: [-13.578, 9.641],
  triggers: "Suspicions that President Alpha Condé would seek a third term by amending the constitution.",
  motivations: "Rising authoritarianism and repression of dissent and protests.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-0 tag-2",
  gif: guinea
}, {
  location: "Catalonia",
  position: [2.173, 41.385],
  triggers: "Sentencing of Catalan separatist leaders to prison.",
  motivations: "Catalan independence, dissatisfaction with the government response to the independence movement, and belief that Catalonia should retain more of its own tax revenues.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-3",
  gif: catalonia
}, {
  location:"Chile",
  position: [-70.669, -33.449],
  triggers: "Increased price of metro fares.",
  motivations: "Severe inequality, low wages and pensions, poor service delivery, discontent with government, militarised response to the protests, and government leaders' corruption.",
  outcomes: "The subway fare hike was reversed, and legislators agreed to a 2020 referendum over whether to write a new constitution.",
  tags: "tag-1 tag-2 tag-3 tag-4",
  gif: chile
}, {
  location: "Lebanon",
  position: [35.502, 33.894],
  triggers: "Introduction of taxes on tobacco, petrol, and internet voice calls.",
  motivations: "High youth unemployment and a currency crisis, income inequality, poor service delivery, and political nepotism and corruption due to sectarianism.",
  outcomes: "Prime Minister Saad Hariri resigned. Protests continued under his successor, Hassan Diab, whose government resigned after the Beirut blast of 2020.",
  tags: "tag-1 tag-3 tag-4",
  gif: lebanon
}, {
  location: "Colombia",
  position: [-74.072, 4.711],
  triggers: "Rumored pensions cuts, implementation challenges of the country’s peace deal, and rising violence.",
  motivations: "Disapproval of President Iván Duque Márquez’s government, rising economic inequality, corruption, and militarised response to protests.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-1 tag-2 tag-3 tag-4",
  gif: colombia
}, {
  location: "India",
  position: [77.103, 28.704],
  triggers: "In December 2019, passage of a bill which amended India’s citizenship law and was criticised for discriminating against Muslims. In September 2020, passage of bills on agricultural market reform.",
  motivations: "Concern over rising Hindu nationalism under Prime Minister Narendra Modi, marginalisation of Muslims, and disruption of the rural farm economy.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-4",
  gif: india
}, {
  location: "United States",
  position: [-93.265, 42.978],
  triggers: "Excessive use of lethal force by police officers against unarmed Black civilians.",
  motivations: "Ongoing police brutality toward communities of Black people, and broader issues of systemic racism.",
  outcomes: "Multiple local governments have reduced funding for the police. Some of the officers involved in the deaths of George Floyd and Breonna Taylor have been arrested.",
  tags: "tag-2",
  gif: usa
}, {
  location: "Sudan",
  position: [32.560, 15.501],
  triggers: "Slow transition from military elite control to civilian control, and the repeal of Islamic legal restrictions.",
  motivations: "Discontent with the military elite’s continued control and influence, and the repeal of Islamic legal restrictions introduced by former president Omar al-Bashir.",
  outcomes: "Bashir and more than twenty former officials were tried for the 1989 military coup. Sudan’s police chief and deputy, linked to Bashir, were fired.",
  tags: "tag-0 tag-3",
  gif: sudan
}, {
  location: "Belarus",
  position: [27.559, 53.901],
  triggers: "Arrests of opposition presidential candidates; anger over the fraudulence of the presidential election.",
  motivations: "Opposition to President Alexander Lukashenko’s reelection campaign; frustration over lack of genuine political pluralism.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-0",
  gif: belarus
}, {
  location: "Bulgaria",
  position: [23.322, 42.698],
  triggers: "Rumours of nepotism surrounding National Security Service agents, and allegations of corruption against Prime Minister Boyko Borisov.",
  motivations: "Widespread corruption that has weakened state institutions and Bulgaria’s rule of law.",
  outcomes: "Four ministers resigned; investigation against the President was blocked; Head of the National Security Service resigned; and the government proposed constitutional reforms.",
  tags: "tag-0 tag-1",
  gif: bulgaria
}, {
  location: "Thailand",
  position: [100.502, 13.756],
  triggers: "Government failure to boost the economy during the pandemic, kidnapping of a leading political activist, and protesters’ desire to repeal Thailand’s strict royal defamation law.",
  motivations: "Lack of employment options for recent graduates, laws that shrink freedoms, and discontent with the military-written constitution.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-3 tag-4",
  gif: thailand
}, {
  location: "Nigeria",
  position: [7.399, 9.077],
  triggers: "Circulation of a video of police brutality.",
  motivations: "Widespread belief that the police, especially the elite Special Anti-Robbery Squad (SARS), was involved in gross violations of human rights.",
  outcomes: "The government disbanded the SARS police squad and promised investigations into alleged human rights abuses.",
  tags: "tag-2",
  gif: nigeria
}, {
  location: "France",
  position: [2.352, 48.857],
  triggers: "Circulation of a video of police brutality, and approval in the Chamber of Deputies of a bill that limits the publication of images of on-duty police officers.",
  motivations: "Concerns that the bill would limit accountability for police and suppress media freedom.",
  outcomes: "The government agreed to rewrite the bill in response to protest demands.",
  tags: "tag-2",
  gif: france
}, {
  location: "Bolivia",
  position: [-68.119, -16.490],
  triggers: "Claims of electoral fraud in the 2019 general elections.",
  motivations: "Economic downturn, frustration over Evo Morales' government and growing fear of authoritarianism.",
  outcomes: "President Evo Morales and Vice-President García Linera resigned.",
  tags: "tag-0 tag-4",
  gif: bolivia
}, {
  location: "Ecuador",
  position: [-78.468, -0.181],
  triggers: "Cancellation of fuel subsidies and announcement of austerity measures.",
  motivations: "Economic crisis, poor service delivery, and growing income inequality.",
  outcomes: "President Lenín Moreno reached an agreement with indigenous groups to reverse the austerity measures.",
  tags: "tag-3 tag-4",
  gif: ecuador
}, {
  location: "Haiti",
  position: [-72.307, 18.594],
  triggers: "Increased prices of fuel.",
  motivations: "Economic crisis, corruption, and government inefficiency.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-1 tag-3 tag-4",
  gif: haiti
}, {
  location: "Venezuela",
  position: [-66.904, 10.481],
  triggers: "Opposition leader Juan Guaidó’s self-declared claim to be the president of Venezuela.",
  motivations: "Economic collapse, corruption, food shortages, brutal government repression of dissidents, and political authoritarianism.",
  outcomes: "There was no change in policy or leadership in response to the protests.",
  tags: "tag-0 tag-2 tag-4",
  gif: venezuela
}]

function Instructions() {
  return (
    <div className="instructions">Click on the pins or use the filters below to learn more about the motivations behind each protest.</div>
  );
}

class HelpButton extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    $("#help").show();
  }
  render() {
    return (
      <div className="help-button" onClick={this.handleClick}><i class="far fa-question-circle" /></div>
    );
  }
}

class Help extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    $("#help").hide();
  }
  render() {
    return (
      <div id="help" className="help">
        <div className="help-overlay" onClick={this.handleClick}></div>
        <div className="help-panel">sadhasdkfsd</div>
      </div>
    );
  }
}

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/charlesingea/ckkwgll2a4zb417n42kaelwja",
      center: [0, 25],
      zoom: 1.5,
      logoPosition: "top-right",
      renderWorldCopies: false,
      interactive: false,
      attributionControl: false,
    });
    // map.addControl(new mapboxgl.AttributionControl({compact: true}), "top-left");
    protests.forEach((protest) => {
      const el = document.createElement("div");
      el.className = "marker marker-yellow "+protest.tags;
      var popup = new mapboxgl.Popup({
        offset: 10,
        focusAfterOpen: false,
        closeButton: false,
        className: "popup"
      })
      .setText("test")
      .setHTML(
        "<img src="+protest.gif+" alt='"+protest.location+"' />"+
        "<div className='popup'><h3>"+protest.location+"</h3>"+
        "<p><strong>Triggers:</strong> "+protest.triggers+"</p>"+
        "<p><strong>Motivations:</strong> "+protest.motivations+"</p>"+
        "<p><strong>Outcomes:</strong> "+protest.outcomes+"</p></div>"
      );
      popup.on('open', function(){
        el.classList.add("marker-active");
      });
      popup.on('close', function(){
        el.classList.remove("marker-active");
      });
      new mapboxgl.Marker(el).setLngLat(protest.position).setPopup(popup).addTo(map);
    });
}
  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    );
  }
}

class Filters extends React.Component {
  constructor(props) {
    super(props)
  }
  handleMouseEnter(i) {
    $(".tag-"+i).removeClass("marker-yellow");
    $(".tag-"+i).addClass("marker-"+i);
  }
  handleMouseLeave(i) {
    $(".tag-"+i).removeClass("marker-"+i);
    $(".tag-"+i).addClass("marker-yellow");
  }
  renderFilter(i) {
    return (
      <div
      className={"filter filter-"+i}
      onMouseEnter={() => this.handleMouseEnter(i)}
      onMouseLeave={() => this.handleMouseLeave(i)}
      >{filters[i]}</div>
    );
  }
  render() {
    return (
      <div className="filters">
        {this.renderFilter(0)}
        {this.renderFilter(1)}
        {this.renderFilter(2)}
        {this.renderFilter(3)}
        {this.renderFilter(4)}
      </div>
    );
  }
}

class SceneTwo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <HelpButton />
        <Help />
        <Instructions />
        <Map />
        <Filters />
      </div>
    );
  }
}

export default SceneTwo;

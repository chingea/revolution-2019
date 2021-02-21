import React from "react";
import ReactDOM from 'react-dom';
import $ from "jquery";
import { Tweet } from 'react-twitter-widgets';
import scrollama from "scrollama";
import mapboxgl from "mapbox-gl";
import economist from "../../media/prologue/logo-economist.png";
import ft from "../../media/prologue/logo-ft.png";
import npr from "../../media/prologue/logo-npr.png";
import ny from "../../media/prologue/logo-new-yorker.png";
import nyt from "../../media/prologue/logo-new-york-times.png";
import aj from "../../media/prologue/logo-aljazeera.png";
import an from "../../media/prologue/logo-annahar.png";
import vox from "../../media/prologue/logo-vox.png";
import gu from "../../media/prologue/logo-guardian.png";

// const accessToken = process.env.REACT_APP_MAPBOX_KEY;
const accessToken = "pk.eyJ1IjoiY2hhcmxlc2luZ2VhIiwiYSI6ImNqcWpudGdsMDBwdmY0OXBvanQyaHN0MnoifQ._0O-n_18aXTVaue93HD6PQ"



const articles = [{
  title: "Digital media fuel global protests but can be used against them",
  source: "The Economist",
  url: "https://www.economist.com/international/2021/01/16/digital-media-fuel-global-protests-but-can-be-used-against-them",
  tag: "article-1",
  logo: economist,
  text: "Protesters in 2019 relied heavily on digital media for organisation, publicity and communication.",
  highlight: "Protesters in 2019 relied heavily on digital media for organisation, publicity and communication."
}, {
  title: "2019: the year of street protest",
  source: "The Financial Times",
  url: "https://www.ft.com/content/9f7e94c4-2563-11ea-9a4f-963f0ec7e134",
  tag: "article-3",
  logo: ft,
  text: "Social media is a powerful organising tool everywhere — allowing protesters to crowdsource grievances, slogans and tactics.",
  highlight: "Social media is a powerful organising tool everywhere — allowing protesters to crowdsource grievances, slogans and tactics."
}, {
  title: "Lebanon's Government Is Accused Of Swarming WhatsApp To Catch Protesters",
  source: "NPR",
  url: "https://www.npr.org/2020/03/09/809684634/lebanons-government-is-accused-of-swarming-whatsapp-to-catch-protesters?t=1613410699449",
  tag: "article-2",
  logo: npr,
  text: "They organized and shared updates on WhatsApp, streamed protests live on Twitter and highlighted police abuse on Instagram.",
  highlight: "They organized and shared updates on WhatsApp, streamed protests live on Twitter and highlighted police abuse on Instagram."
}, {
  title: "The Second Act of Social-Media Activism",
  source: "The New Yorker",
  url: "https://www.newyorker.com/culture/cultural-comment/the-second-act-of-social-media-activism",
  tag: "article-1",
  logo: ny,
  text: "Protest guides, generated from years of on-the-ground activist experience, are readily shared over Twitter and Instagram, telling readers how to blur faces in photographs or aid in de-arrests.",
  highlight: "Protest guides, generated from years of on-the-ground activist experience, are readily shared over Twitter and Instagram"
}, {
  title: "Leaderless rebellion: how social media enables global protests",
  source: "The Financial Times",
  url: "https://www.ft.com/content/19dc5dfe-f67b-11e9-a79c-bc9acae3b654",
  tag: "article-3",
  logo: ft,
  text: "Social media also allows a movement in one place to take inspiration from news of revolts in another. The occupation of the airport in Barcelona last week was a tactic borrowed from Hong Kong. The Sudanese and Algerian uprisings this year borrowed each other’s imagery and slogans.",
  highlight: "Social media also allows a movement in one place to take inspiration from news of revolts in another."
}, {
  title: "The Story of 2019: Protests in Every Corner of the Globe",
  source: "The New Yorker",
  url: "https://www.newyorker.com/news/our-columnists/the-story-of-2019-protests-in-every-corner-of-the-globe",
  tag: "article-1",
  logo: ny,
  text: "There may be a global contagion due to social media. Seeing protests in other places motivates people to be willing to go to the streets in their own countries.",
  highlight: "There may be a global contagion due to social media."
}, {
  title: "Why Protest Tactics Spread Like Memes",
  source: "The New York Times",
  url: "https://www.nytimes.com/2020/07/31/style/viral-protest-videos.html",
  tag: "article-2",
  logo: nyt,
  text: "Activists from around the world do actively learn from each other and exchange tactical tips. Images of protest spread on social media reveal many other matching moments from opposite sides of the world.",
  highlight: "Activists from around the world do actively learn from each other and exchange tactical tips."
}, {
  title: "Colombia protests pile pressure on president and hamper reforms",
  source: "The Financial Times",
  url: "https://www.ft.com/content/a2d80d10-11ba-11ea-a225-db2f231cfeae",
  tag: "article-3",
  logo: ft,
  text: "Demonstrators in Colombia have copied the tactics of protests sweeping other Latin American nations, organising via social media and beating pots and pans to press their demands.",
  highlight: "Demonstrators in Colombia have copied the tactics of protests sweeping other Latin American nations"
}, {
  title: "Pots and pans ‘cacerolazo’ protests echo across Latin America",
  source: "AlJazeera",
  url: "https://www.aljazeera.com/news/2019/12/2/pots-and-pans-cacerolazo-protests-echo-across-latin-america",
  tag: "article-2",
  logo: aj,
  text: "When 6pm struck in Colombia, the sound of banging pots and pans – the “cacerolazo” – echoed across the country like they have since the mass anti-government protest kicked off more than a week ago.",
  highlight: "When 6pm struck in Colombia, the sound of banging pots and pans – the “cacerolazo” – echoed across the country"
}, {
  title: "A Cacophonous Revolution: When pans and pots become the voice of the protests",
  source: "An-Nahar",
  url: "https://www.annahar.com/english/article/1068283-a-cacophonous-revolution-when-pans-and-pots-become-the-voice-of-the-protests",
  tag: "article-2",
  logo: an,
  text: "Cookware cacophony has been the spotlight of the Lebanese protests during the past few days, as protesters resorted to banging their pots and pans to denounce the country’s endemic corruption and escalating crisis.",
  highlight: "Cookware cacophony has been the spotlight of the Lebanese protests during the past few days, as protesters resorted to banging their pots and pans"
}, {
  title: "Why protesters have been banging pots and pans outside their windows",
  source: "Vox",
  url: "https://www.vox.com/identities/2020/6/5/21279690/protest-george-floyd-cacerolazo-bang-pots",
  tag: "article-1",
  logo: vox,
  text: "Protesters in Washington, DC, Philadelphia, and Los Angeles have all been spotted participating in cacerolazos over the past week.",
  highlight: "Protesters in Washington, DC, Philadelphia, and Los Angeles have all been spotted participating in cacerolazos over the past week."
}, {
  title: "Chile’s ‘A rapist in your path’ chant hits 200 cities",
  source: "AlJazeera",
  url: "https://www.aljazeera.com/news/2019/12/20/chiles-a-rapist-in-your-path-chant-hits-200-cities-map",
  tag: "article-2",
  logo: aj,
  text: "From Santiago to Nairobi and Tijuana to Stockholm, women in hundreds of cities worldwide have executed a Chilean choreographed feminist performance protesting sexual assault, victim-blaming and state violence.",
  highlight: "From Santiago to Nairobi and Tijuana to Stockholm, women in hundreds of cities worldwide have executed a Chilean choreographed feminist performance"
}, {
  title: "‘The rapist is you!’: why a Chilean protest chant is being sung around the world",
  source: "The Guardian",
  url: "https://www.theguardian.com/society/2020/feb/03/the-rapist-is-you-chilean-protest-song-chanted-around-the-world-un-iolador-en-tu-camino",
  tag: "article-3",
  logo: gu,
  text: "Since November, Un Violador en Tu Camino has been sung everywhere from France and Mexico to Kenya and India as a protest against the systemic use of sexual violence to repress women.",
  highlight: "Since November, Un Violador en Tu Camino has been sung everywhere from France and Mexico to Kenya and India"
}, {
  title: "The Story of 2019: Protests in Every Corner of the Globe",
  source: "The New Yorker",
  url: "https://www.newyorker.com/news/our-columnists/the-story-of-2019-protests-in-every-corner-of-the-globe",
  tag: "article-1",
  logo: ny,
  text: "The protests of 2019 have been epochal, the fury real, and the underlying message profound for the future.",
  highlight: "The protests of 2019 have been epochal, the fury real, and the underlying message profound for the future."
}];





var config = {
    style: 'mapbox://styles/charlesingea/ckkwgll2a4zb417n42kaelwja',
    accessToken: accessToken,
    showMarkers: true,
    theme: 'light',
    chapters: [
        {
            id: 'usa-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1266504172494520325',
            location: {
                center: [-93.26223, 44.98240],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'lebanon-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1185513821189869571',
            location: {
                center: [35.50461, 33.88607],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'peru-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1326307879658409987',
            location: {
                center: [-76.91043, -12.04689],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'chile-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1195577421904433157',
            location: {
                center: [-70.65801, -33.45275],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'hong-kong-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1188599298637754368',
            location: {
                center: [114.14795, 22.33804],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'usa-2',
            alignment: 'left',
            hidden: true,
            tweetId: '1265808184519864320',
            location: {
                center: [-93.26223, 44.98240],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'lebanon-2',
            alignment: 'left',
            hidden: true,
            tweetId: '1266467025938980875',
            location: {
                center: [35.50461, 33.88607],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'hong-kong-2',
            alignment: 'left',
            hidden: true,
            tweetId: '1187357753162862594',
            location: {
                center: [114.14795, 22.33804],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'thailand-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1317860057283952645',
            location: {
                center: [100.63313, 13.72362],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
          },
        {
            id: 'colombia-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1207712234354434048',
            location: {
                center: [-74.21842, 4.28391],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
        },
        {
            id: 'iraq-1',
            alignment: 'left',
            hidden: true,
            tweetId: '1188778982700965888',
            location: {
                center: [44.38275, 33.30435],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
          },
          {
              id: 'lebanon-3',
              alignment: 'left',
              hidden: true,
              tweetId: '1216396385894981634',
              location: {
                  center: [35.50461, 33.88607],
                  zoom: 9,
                  pitch: 0.00,
                  bearing: 0.00
              },
          },
    ]
};












class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var layerTypes = {
        'fill': ['fill-opacity'],
        'line': ['line-opacity'],
        'circle': ['circle-opacity', 'circle-stroke-opacity'],
        'symbol': ['icon-opacity', 'text-opacity'],
        'raster': ['raster-opacity'],
        'fill-extrusion': ['fill-extrusion-opacity'],
        'heatmap': ['heatmap-opacity']
    }

    var alignments = {
        'left': 'lefty',
        'center': 'centered',
        'right': 'righty',
        'full': 'fully'
    }

    var story = document.getElementById('story');
    var features = document.createElement('div');
    features.setAttribute('id', 'features');

    var header = document.createElement('div');

    if (config.title) {
        var titleText = document.createElement('h1');
        titleText.innerText = config.title;
        header.appendChild(titleText);
    }

    if (config.subtitle) {
        var subtitleText = document.createElement('h2');
        subtitleText.innerText = config.subtitle;
        header.appendChild(subtitleText);
    }

    if (config.byline) {
        var bylineText = document.createElement('p');
        bylineText.innerText = config.byline;
        header.appendChild(bylineText);
    }

    if (header.innerText.length > 0) {
        header.classList.add(config.theme);
        header.setAttribute('id', 'header');
        story.appendChild(header);
    }

    config.chapters.forEach((record, idx) => {
        var container = document.createElement('div');
        var chapter = document.createElement('div');

        if (record.title) {
            var title = document.createElement('h3');
            title.innerText = record.title;
            chapter.appendChild(title);
        }

        if (record.image) {
            var image = new Image();
            image.src = record.image;
            chapter.appendChild(image);
        }

        if (record.description) {
            var story = document.createElement('p');
            story.innerHTML = record.description;
            chapter.appendChild(story);
        }

        container.setAttribute('id', record.id);
        container.classList.add('step');
        if (idx === 0) {
            container.classList.add('active');
        }

        chapter.classList.add(config.theme);
        container.appendChild(chapter);
        container.classList.add(alignments[record.alignment] || 'centered');
        if (record.hidden) {
            container.classList.add('hidden');
        }
        features.appendChild(container);
    });

    story.appendChild(features);

    var footer = document.createElement('div');

    if (config.footer) {
        var footerText = document.createElement('p');
        footerText.innerHTML = config.footer;
        footer.appendChild(footerText);
    }

    if (footer.innerText.length > 0) {
        footer.classList.add(config.theme);
        footer.setAttribute('id', 'footer');
        story.appendChild(footer);
    }

    mapboxgl.accessToken = config.accessToken;

    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";

        return {
          url: url + suffix
        }
    }

    var map = new mapboxgl.Map({
        container: 'map',
        logoPosition: "bottom-right",
        attributionControl: false,
        style: config.style,
        center: config.chapters[0].location.center,
        zoom: config.chapters[0].location.zoom,
        bearing: config.chapters[0].location.bearing,
        pitch: config.chapters[0].location.pitch,
        interactive: false,
        transformRequest: transformRequest
    });

    if (config.showMarkers) {
      var tweetContainer = document.createElement("div");
      var tweet = <Tweet tweetId={config.chapters[0].tweetId} options={{ theme: "dark", width: "300", align: "center"}} />;
      ReactDOM.render(tweet, tweetContainer);
      var popup = new mapboxgl.Popup({
        offset: [0, -250],
        focusAfterOpen: false,
        closeButton: false,
        closeOnClick: false
      })
      .setDOMContent(tweetContainer);
      popup.setLngLat(config.chapters[0].location.center).addTo(map);
      popup.addClassName("tweet-popup");
    }

    // instantiate the scrollama
    var scroller = scrollama();

    map.on("load", function() {
        if (config.use3dTerrain) {
            map.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                'tileSize': 512,
                'maxzoom': 14
            });
            // add the DEM source as a terrain layer with exaggerated height
            map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

            // add a sky layer that will show when the map is highly pitched
            map.addLayer({
                'id': 'sky',
                'type': 'sky',
                'paint': {
                    'sky-type': 'atmosphere',
                    'sky-atmosphere-sun': [0.0, 0.0],
                    'sky-atmosphere-sun-intensity': 15
                }
            });
        };

        // setup the instance, pass callback functions
        scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map[chapter.mapAnimation || 'flyTo'](chapter.location);

            if (config.showMarkers) {
                var tweet = <Tweet tweetId={chapter.tweetId} options={{ theme: "dark", width: "300", align: "center"}} />;
                ReactDOM.render(tweet, tweetContainer);
                popup.setDOMContent(tweetContainer);
                popup.setLngLat(chapter.location.center);
            }
            if (chapter.callback) {
                window[chapter.callback]();
            }
            if (chapter.rotateAnimation) {
                map.once('moveend', function() {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber + 90, {
                        duration: 24000, easing: function (t) {
                            return t;
                        }
                    });
                });
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
        });
    });

    // setup resize event
    window.addEventListener('resize', scroller.resize);
  }
  render() {
    return (
      <div id="interactive-map">
        <div id="instructions-map">Scroll to explore social media posts.</div>
        <div id="map"></div>
        <div id="story"></div>
      </div>
    );
  }
}

class Articles extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(".outer").each((i, article) => {
      var height = Math.max(0, Math.min(100, 100 * (article.getBoundingClientRect().top - (window.innerHeight / 3)) / window.innerHeight));
      $(article).css("transform", "translateX(" + -height + "%)");
      $(article).find(".inner").css("transform", "translateX(" + height + "%)");
    });
    $("#articles").scroll(function() {
      $(".outer").each((i, article) => {
        var height = Math.max(0, Math.min(100, 100 * (article.getBoundingClientRect().top - (window.innerHeight / 3)) / window.innerHeight));
        $(article).css("transform", "translateX(" + -height + "%)");
        $(article).find(".inner").css("transform", "translateX(" + height + "%)");
      });
    });
  }
  renderArticle(i) {
    var article = articles[i];
    return (
      <div className={"article " + article.tag}>
        <a target="_blank" href={article.url}>
          <img src={article.logo} alt={article.source} />
        </a>
        <a target="_blank" href={article.url}>
          <h1>{article.title}</h1>
        </a>
        <div className="article-content">
          {article.text}
          <span className="outer" aria-hidden="true">
            <div className="inner"><span>{article.highlight}</span></div>
          </span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div id="articles">
        <div id="instructions-articles">Scroll to explore news articles.</div>
        <div id="gradient-top"></div>
        <div>
          {this.renderArticle(0)}
          {this.renderArticle(1)}
          {this.renderArticle(2)}
          {this.renderArticle(3)}
          {this.renderArticle(4)}
          {this.renderArticle(5)}
          {this.renderArticle(6)}
          {this.renderArticle(7)}
          {this.renderArticle(8)}
          {this.renderArticle(9)}
          {this.renderArticle(10)}
          {this.renderArticle(11)}
          {this.renderArticle(12)}
          {this.renderArticle(13)}
        </div>
        <div id="whitespace"></div>
        <div id="gradient-bottom"></div>
      </div>
    );
  }
}


class HelpButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="help-button"><i className="far fa-question-circle" /></div>
    );
  }
}





class SceneThree extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="scene-three">
        <HelpButton />
        <Map />
        <Articles />
      </div>
    );
  }
}

export default SceneThree;

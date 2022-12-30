<svelte:head>
    <title>Pete Stenger's Personal Website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Manrope&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/3aa210e078.js" crossorigin="anonymous"></script>
    <style>
        /* General Styles*/
        * { margin:0; padding:0; box-sizing:border-box;font-family: 'Manrope', sans-serif;}
        .intro-img {
            width: 100%;
        }
        body {
            width: 100%;
            min-height: 100vh;
        }
        body {
            background: #f4f5f6;
        }
        h1 {
            text-align: center;
        }
        .link:hover, .visible {
            transform: translate(2px, 8px);
            transition: .2s;
            box-shadow: 0 0 0 0 !important;
        }
        .link {
            box-shadow: 2px 8px 0px 0px black;
        }
        .link {
            cursor: pointer;
            padding: 10px;
            font-size: 20px;
            border-radius: 5px;
            color: #dddddd;
        }
        .link a {
            text-decoration: none;
            
        }

        .navigation {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
        #projects {
            background-color: #4ea36a;
        }
        #resume {
            background-color: #3a5da9;
        }
        #about {
            background-color:#763d8d;
        }
        .projects {
            display: flex;
            background: #4ea36a;
        }
        .about {
            min-height: 100%;
            background-color:#763d8d;

        }
        .resume {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: #3a5da9;
        }
        .cards {
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
            display: flex;
        }

        .card img {
            width: 100%;
        }
        .about-part {
            padding: 1em;
        }

        a,div {
            color:#3c4042;
        }
        
        .section {
            margin-top: 1em;
            display: none;
            padding-top: 10em;
        }

        .visible {
            display: block;
        }

        /* Media Queries */
        @media (max-width:600px) {
            .card {
                width: 300px;
            }
            .about-main {
            font-size: 15px;
            }
            iframe {
                width: 100%;
            }
            .spacer {
                height: 0%;
            }
            .contact i {
                font-size: 2em;
            }
        }
        @media (min-width: 600px) {
            .spacer {
                height: 100%;
            }
            .card {
                width: 22%;
            }
            .about-part img {
                width: 50%;
            }
            .contact i {
                font-size: 3em;
            }
        }
        @media (min-width: 600px) and (max-width: 1200px) {

            .link {
                font-size: 30px;
            }
        }
        @media (min-width: 1200px) {
            .link {
                font-size: 50px;
            }
            .cards {
                padding-left: 10%;
                padding-right: 10%;
            }
            .about-main {
                font-size: 2em;
            }
            iframe {
                width: 50%;
            }
        }
        .card {
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background:#f4f5f6;
            margin: 1em 1em 1em 1em;
            padding: 1em;
        }
        .card div {
            padding: 1em;
        }


        .about-main {
            border-radius: 5px;
            background:#f4f5f6;
            margin-left: 1em;
            padding: 1em;
            margin-right: 1em;
            display: flex;
            text-align: center;
            flex-direction: column-reverse;
        }

        .about-main img {
            max-width:100%;
            max-height:100%;
        }
        .contact {
            display: flex;
            justify-content: space-around;
            margin-top: 1em;
        }


        iframe {
            border: none;
            padding: 2em 0 2em 0;
            display: block;
            margin: auto;
            height: 100%;
        }

    </style>
</svelte:head>
<script lang="ts">
    import { onMount } from 'svelte';

    console.log('running script')
    onMount(async () => {
        console.log('onMount')
        document.querySelectorAll(".link").forEach(e => {
            console.log('link')
            e.addEventListener('click', function(event) {
                console.log('clicked')
                document.querySelectorAll('.visible').forEach(elem => elem.classList.remove('visible'));
                event.target.classList.add('visible');
                document.querySelector(`.${event.target.id}`).classList.add("visible");
            })
        })
    })
</script>
    <div class="container">
        <img class="intro-img" src="/2020-assets/intro.gif">
        <div class="navigation">
            <div id="projects" class="link visible">Projects</div>
            <div id="resume" class="link">Resume</div>
            <div id="about" class="link">About Me</div>
        </div>
        <div class="section projects visible">
            <div class="cards">

            
                <div class="card">
                    <h1>Word Hunt World Record</h1>
                    <img src="/2020-assets/wordhunt.jpg">
                    
                    <div>A program to play the iMessage game, word hunt. Check out my video <a
                            href="https://www.tiktok.com/@spicypete/video/6821358058799779078" target="_blank">here</a> that explains how I got the WR!
                    </div>
                    <a target="_blank" href="https://github.com/reteps/word-hunt">Source <i class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>Cross Country Time Grapher</h1>
                    <img src="/2020-assets/riverrat.png" alt="">
                    <div>A website & bot that graphs cross country and track times. Check it out <a
                            href="https://riverrats.github.io">here</a>.</div>
                    <div class="spacer"></div>
                    <a target="_blank" href="https://github.com/riverrats/riverrats.github.io">Website Source <i
                            class="fas fa-code"></i></a>
                    <a target="_blank" href="https://github.com/reteps/groupme-crosscountry-bot">Bot Source <i class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>2020 FRC Robot Code</h1>
                    <img src="/2020-assets/robot.png" alt="">
                    <div>The code for the Ratpack Robotics 2020 (and 2021!) season. Implemented swerve drive. </div>
                    <div class="spacer"></div>
                    <a target="_blank"  href="https://github.com/frc830/2020robot">Source <i class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>Kahoot Bot</h1>
                    <img src="/2020-assets/kahoot.jpg" alt="">
                    <div>A python script to answer all questions correctly for the popular quiz game, Kahoot.</div>
                    <div class="spacer"></div>
                    <a target="_blank" href="https://github.com/reteps/kbot">Source <i class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>Statlete</h1>
                    <img src="/2020-assets/statlete.png" alt="">
                    <div>An iOS app that displays athlete information from athletic.net. Check out this  
                        <a href="/2020-assets/statlete.gif" target="_blank">gif</a>!
                    </div>
                    <div class="spacer"></div>
                    <a target="_blank" href="https://github.com/reteps/statlete">Source <i class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>PowerJoule</h1>
                    <img src="/2020-assets/powerjoulecode.png" alt="">
                    <div>A mac menu bar app that displays your powerschool grades.</div>
                    <div class="spacer"></div>
                    <a target="_blank" href="https://github.com/reteps/powerjoule">Source <i class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>Spotlightify</h1>
                    <img src="/2020-assets/spotlightify.png" alt="">
                    <div>A spotify web app to generate playlists based on 2 users playlists. Check it out <a
                            target="_blank" href="https://spotify-poster.herokuapp.com/">here.</a></div>

                    <div class="spacer"></div>
                    <a target="_blank" href="https://github.com/reteps/spotify-nodes">Source <i
                            class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>Music Genre Map</h1>
                    <img src="/2020-assets/genremap.png" alt="">
                    <div>A algorithmically generated graph of related genres using spotify. Check out the full image <a
                            target="_blank" href="https://i.redd.it/b9uekzkjssx41.jpg">here.</a></div>

                    <div class="spacer"></div>
                    <a target="_blank" href="https://github.com/reteps/everynoise-genre-scraper">Source <i
                            class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>Historical Cross Country Chart</h1>
                    <img src="/2020-assets/bump.png" alt="">
                    <div>A bump chart showing the top 10 athletes from my school throughout history. Check it out here <a
                            target="_blank" href="https://riverrats.github.io/bump.html">here.</a></div>

                    <div class="spacer"></div>
                    <a target="_blank" href="https://github.com/riverrats/riverrats.github.io/blob/master/bump.js">Source <i
                            class="fas fa-code"></i></a>
                </div>
                <div class="card">
                    <h1>Cybersecurity</h1>
                    <img src="/2020-assets/ctf.png" alt="">
                    <div>I have competed in cybersecurity competitions at a <a
                            target="_blank" href="https://ctftime.org/team/154080">high level</a>. Member of <a target="_blank" href="https://sigpwny.com/">SIGPwny</a>, being a major contributor to competitions such as <a target="_blank" href="https://ctftime.org/event/1315">CSAW 2021</a>, where we placed 2nd. 
                        I also wrote a challenge for <a
                            target="_blank" href="https://uiuc.tf">UIUCTF 2021</a> <a
                            target="_blank" href="https://github.com/sigpwny/UIUCTF-2021-Public/tree/master/reverse/pawnfish">here</a>. </div>

                    <div class="spacer"></div>
                </div>
            </div>
        </div>
        <div class="section resume">
            <iframe src="https://docs.google.com/viewerng/viewer?url=https://stenger.io/2020-assets/resumev3.pdf&embedded=true">
            </iframe>
        </div>
        <div class="section about">
            <div class="about-main">
                <div class="about-part">

                    <div>
                        Hi there! My name is Pete Stenger. I'm currently a freshman at the University of Illinois studying computer science. I am interested in all things computers :)
                    </div>
                    <div class="spacer"></div>
                    <div class="contact">
                            <a target="_blank" href="https://www.linkedin.com/in/peter-stenger-94a9891a0/"><i class="fab fa-linkedin"></i></a>
                            <a target="_blank" href="https://instagram.com/pete._.stenger"><i class="fab fa-instagram"></i></a>
                            <a target="_blank" href="mailto:pete@stenger.io"><i class="far fa-envelope"></i></a>
                            <a target="_blank" href="https://github.com/reteps"><i class="fab fa-github"></i></a>
                    </div>               
                </div>
                <div class="about-part">
                    <img src="/2020-assets/me.jpg">
                </div>
            </div>
        </div>
    </div>
<!-- </body> -->

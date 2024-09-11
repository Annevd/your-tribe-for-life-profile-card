<script>
    export let data;
</script>

<body>
    <main>
        <article>
            <h1>
                {data.person.name}
                <span>{data.person.prefix} {data.person.surname}</span>
            </h1>

            <p class="bio">{data.person.bio}</p>

            <div><span>Student</span> <span>FDND</span></div>
            
            <ul class="info">
                <li>21 jaar</li> <!-- Moet custom data worden-->
                <li>Landsmeer</li> <!-- Moet custom data worden-->
            </ul>

            <ul class="links">
                <li>
                    <a href="https://www.instagram.com/xartisticanne?igsh=ZHAweG96MDVjZXc=">
                        <svg width=45 height=45 viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#000">
                            <g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}</style></defs>
                                <path class="cls-1" d="M35.38 10.46a2.19 2.19 0 1 0 2.16 2.22v-.06a2.18 2.18 0 0 0-2.16-2.16Z"/>
                                <path class="cls-1" d="M40.55 5.5H7.45a2 2 0 0 0-1.95 2v33.1a2 2 0 0 0 2 2h33.1a2 2 0 0 0 2-2V7.45a2 2 0 0 0-2.05-1.95Z"/>
                            <path class="cls-1" d="M24 15.72A8.28 8.28 0 1 0 32.28 24h0A8.28 8.28 0 0 0 24 15.72Z"/></g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#"> <!-- Moet custom data worden-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512" xml:space="preserve">
                            <g id="SVGRepo_iconCarrier">
                              <path d="M256 1a255 255 0 1 0 0 510 255 255 0 0 0 0-510zm0 469a214 214 0 1 1 0-428 214 214 0 0 1 0 428zm158-264v-2h-1a14 
                              14 0 0 0-1-3 12 12 0 0 0-2-3l-1-1h-1l-144-97c-5-3-11-3-16 0l-144 97h-1l-1 1a12 12 0 0 0-2 3 13 13 0 0 0-1 2v1h-1v104h1v2a16 
                              16 0 0 0 2 3l1 1a12 12 0 0 0 2 1l144 97a14 14 0 0 0 16 0l144-97h1l1-1 1-1v-1l1-1 1-1v-2h1V206zm-144-69 106 71-48 32-58-40v-63zm-28 0v63l-58 40-48-32 
                              106-71zm-117 96 34 23-34 23v-46zm117 142-106-71 48-32 58 40v63zm14-87-48-32 48-32 48 32-48 32zm14 87v-63l58-40 48 32-106 71zm117-96-34-23 34-23v46z" id="c2be471c56fc5b4dd571614bb30525c6"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href={data.person.website}>
                        <svg height="45" width="45" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" xml:space="preserve">
                            <path d="M-143 145v512h512V145h-512zm482 482h-452V175h452v452z"/>
                            <path d="M54 509c19 4 39 4 57 5 20-1 39-1 57-4 32-5 56-22 68-53 4-11 7-22 8-34 3-25-1-48-18-68l-2-4c1-20-1-39-8-58-1-3-2-4-5-3l-16 
                            5c-16 5-30 13-43 22-1 1-4 2-5 1-22-4-45-3-67 0l-7-1c-15-10-31-20-50-25-15-4-12-5-16 9-5 16-7 33-6 50l-1 4c-7 8-12 17-15 26-6 19-5 39-1 
                            58 7 37 33 64 70 70zm-33-89c9-17 24-23 41-23l29 2c20 1 40 0 60-2l26 1c19 4 33 22 33 43l-2 18c-3 16-12 26-28 32-14 5-29 7-45 8l-22 1c-21 0-41-1-60-7-25-7-36-22-37-47 0-9 1-18 5-26z"/>
                            <path d="M79 466c10-10 9-30 0-41-7-7-16-7-23 0-5 6-7 13-8 19 0 10 3 18 8 23 7 6 16 6 23-1zm69 1c7 6 15 6 22-1 5-5 7-13 7-20 0-8-2-16-7-21-7-7-15-7-22-1-11 10-11 33 0 43z"/>
                        </svg>
                    </a>
                </li>
            </ul>

            <img class="selfie" height=300 src="images/foto-self-1.PNG" alt="selfie">

            <p>&copy; 14 february 2024</p>

            <img class="orbit-icon" src="images/orbit.svg" alt="">

        </article>
    </main>
</body>

<style>

article {
    display: grid;
    grid-template-columns: repeat(3, auto) ;
    grid-template-rows: repeat(6, auto) ;
    background-color: var(--background-card);
    height: auto;
    max-width: 18rem;
    grid-gap: 1rem;
    padding: 1rem 1rem 0 1rem;
    /* overflow: hidden; */
}

h1 {
    display: flex;
    flex-direction: column;
    grid-column: 1/4;
    grid-row:1; 
    font-size: 2.75rem;
    font-family: 'Apestron', sans-serif;
}

h1 span {
    display: flex;
}

.links {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    grid-column: 2/4;
    grid-row: 1;
    justify-self: end;
    align-self: start;
}

.links svg {
    height: 35px;
    width: 35px;
}

.links li:first-of-type svg .cls-1 {
    stroke: var(--accent-color-2);
}

.links li:nth-of-type(2) svg {
    fill: var(--accent-color-3);
}

.links li:last-of-type svg {
    fill: var(--accent-color-1);
}

.bio {
    grid-column: 2/4;
    grid-row: 2;
    max-width: 12rem;
}

.info {
    grid-column: 1/3;
    grid-row: 5;
    /* justify-self: center; */
}

.info li {
    list-style: circle;
    list-style-position: inside;
}

div:first-of-type {
    display: flex;
    flex-direction: column;
    grid-column: 1/4;
    grid-row: 3/5;
    align-self: center;
    font-size: 2rem;
    text-align: center;
    font-family: 'Sofachrome', sans-serif;
    transform: scaleY(1.5);
    line-height: 1;
}

div:first-of-type span:last-of-type {
    font-size: 3.25rem;
    transform: scaleY(1.25);
}

@supports (-webkit-text-stroke: 1px black) {
  div:first-of-type {
    -webkit-text-stroke: 0.5px var(--accent-color-1);
    -webkit-text-fill-color: transparent;
  }

  div:first-of-type span:last-of-type {
    -webkit-text-stroke: 0.5px var(--accent-color-2);
  }
}

.orbit-icon {
    grid-column: 1;
    grid-row: 2;
    transform: rotate(90deg);
    align-self: center;
    justify-self: center;
    scale: 2;
}

.selfie {
    grid-column: 2/4;
    grid-row: 3/7;
    justify-self: center;
    z-index: 100;
}

p:last-of-type {
    grid-column: 2/4;
    grid-row: 6;
    justify-self: end;
    align-self: end;
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
    z-index:101;
}

@media (width > 25rem) {
    article {
    max-width: 22rem;
}

h1 {
    font-size: 3.25rem;
}

p:first-of-type {
    max-width: 16rem;
}

div:first-of-type {
    font-size: 2.5rem;
}

div:first-of-type span:last-of-type {
    font-size: 4rem;
}

}

</style>

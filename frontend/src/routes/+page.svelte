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

            <p>{data.person.bio}</p>

            <div><span>Student</span> <span>FDND</span></div>
            
            <ul>
                <li>21 jaar</li> <!-- Moet custom data worden-->
                <li>Landsmeer</li> <!-- Moet custom data worden-->
            </ul>

            <ul>
                <li>
                    <a href="#"> <!-- Moet custom data worden-->
                        <svg width=45 height=45 viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#000">
                            <g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}</style></defs>
                                <path class="cls-1" d="M35.38 10.46a2.19 2.19 0 1 0 2.16 2.22v-.06a2.18 2.18 0 0 0-2.16-2.16Z"/>
                                <path class="cls-1" d="M40.55 5.5H7.45a2 2 0 0 0-1.95 2v33.1a2 2 0 0 0 2 2h33.1a2 2 0 0 0 2-2V7.45a2 2 0 0 0-2.05-1.95Z"/>
                            <path class="cls-1" d="M24 15.72A8.28 8.28 0 1 0 32.28 24h0A8.28 8.28 0 0 0 24 15.72Z"/></g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/xartisticanne?igsh=ZHAweG96MDVjZXc=">
                        <svg width="64" height="64" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon" stroke="#000">
                            <path d="M723 428 536 303v112l103 69zm-211 28-84 57 84 56 85-57zm24 154v112l187-125-83-56zm-152-69-83 56 187 125V610l-104-69zm496-429H144c-18 
                            0-32 14-32 32v736c0 18 14 32 32 32h736c18 0 32-14 32-32V144c0-18-14-32-32-32zm-90 485v4a14 14 0 0 1-1 3l-1 2v1l-1 2-1 1-1 1-1 1-1 2-1 1-1 1-1 1h-1L525 
                            786c-4 3-8 4-13 4s-9-1-13-4L245 617h-1l-1-1-1-1-1-1-1-1a7 7 0 0 1-1-1l-1-2-1-1-1-2v-1l-1-2v-1l-1-2V424a14 14 0 0 1 1-3l1-2v-1a12 12 0 0 1 2-3l2-3 1-1 1-1 1-1 1-1h1l254-169c8-5 
                            18-5 26 0l254 169h1l1 1 1 1 1 1 1 2 2 2 1 1 1 2v1l1 2v1l1 2v173zm-48-45v-79l-60 39zm-460-79v79l60-40zm206-58V303L301 428l83 56z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href={data.person.website}>
                        <svg height="64" width="64" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" xml:space="preserve">
                            <path d="M-143 145v512h512V145h-512zm482 482h-452V175h452v452z"/>
                            <path d="M54 509c19 4 39 4 57 5 20-1 39-1 57-4 32-5 56-22 68-53 4-11 7-22 8-34 3-25-1-48-18-68l-2-4c1-20-1-39-8-58-1-3-2-4-5-3l-16 
                            5c-16 5-30 13-43 22-1 1-4 2-5 1-22-4-45-3-67 0l-7-1c-15-10-31-20-50-25-15-4-12-5-16 9-5 16-7 33-6 50l-1 4c-7 8-12 17-15 26-6 19-5 39-1 
                            58 7 37 33 64 70 70zm-33-89c9-17 24-23 41-23l29 2c20 1 40 0 60-2l26 1c19 4 33 22 33 43l-2 18c-3 16-12 26-28 32-14 5-29 7-45 8l-22 1c-21 0-41-1-60-7-25-7-36-22-37-47 0-9 1-18 5-26z"/>
                            <path d="M79 466c10-10 9-30 0-41-7-7-16-7-23 0-5 6-7 13-8 19 0 10 3 18 8 23 7 6 16 6 23-1zm69 1c7 6 15 6 22-1 5-5 7-13 7-20 0-8-2-16-7-21-7-7-15-7-22-1-11 10-11 33 0 43z"/>
                        </svg>
                    </a>
                </li>
            </ul>

            <img height=300 src="images/foto-self.PNG" alt="selfie">

            <p>&copy; 14 february 2024</p>

            <img src="images/orbit.svg" alt="">

        </article>
    </main>
</body>

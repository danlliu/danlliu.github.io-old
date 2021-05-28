<template>
    <div id="app">
        <i id="scroll-down" class="bi-chevron-down" style="position: fixed; bottom: 32px; left: calc(50% - 16px);
        font-size: 2rem; transition: bottom 0.25s ease, opacity 0.50s ease;
        color: white; opacity: 0"/>
        <div class="container" style="position: fixed; top: 16px; z-index: 2048">
            <h1 class="font-monospace" id="helloworld" style="font-size: 112px; color: #FFF">hello
                world</h1>
        </div>
        <nav class="navbar navbar-expand-xl navbar-light w-100" id="navbar" style="position: fixed; top: 0;
    padding: 16px 0; background-color: #FFFFFF; z-index: 2048;
    display: none;">
            <div class="container-fluid">
                <p class="font-monospace h1 mb-0" style="font-size: 32px;">daniel liu</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
                        aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"/>
                </button>
                <div class="collapse navbar-collapse" id="navbar-links">
                    <div class="navbar-nav ms-3">
                        <a class="nav-link" href="#section-about-me">about me</a>
                        <a class="nav-link" href="#section-edu">education</a>
                        <a class="nav-link" href="#section-coursework">coursework</a>
                        <a class="nav-link" href="#section-projects">projects</a>
                        <a class="nav-link" href="#section-work-exp">work experience</a>
                        <a class="nav-link" href="#section-research">research experience</a>
                        <a class="nav-link" href="#section-contact">contact</a>
                        <a class="nav-link" href="#section-resume">résumé</a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="section container" style="margin-top: 100vh;">
            <a class="anchor" id="section-about-me"/>
            <h2><i class="bi-person-lines-fill"/> About Me</h2>
            <p>Hi, I'm Daniel. I like to write code and do chemistry. Sometimes, I get to do both! To hear more about
                my coding projects, head to the <a href="#section-projects">projects section</a>!</p>
        </div>

        <div class="section container">
            <a class="anchor" id="section-edu"/>
            <h2><i class="bi-lightbulb"/> Education</h2>
            <div class="container d-flex flex-row flex-wrap p-3">
                <div class="card m-0 edu-card">
                    <div class="card-body">
                        <h5 class="card-title">University of Michigan</h5>
                        <h6 class="card-subtitle mb-2 text-muted">College of Literature, Science, and the Arts +
                            College of Engineering</h6>
                        <h6 class="card-subtitle mb-2 text-muted">B.S.Chem + B.S.E. Computer Science</h6>
                        <hr/>
                        Fall 2019 - present
                    </div>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-coursework"/>
            <h2><i class="bi-book"/> Coursework</h2>
            <div class="container row">
                <div class="col-12 col-md-6 col-xl-4 flex-grow-1">
                    <CourseCard course-name="EECS203" course-title="Discrete Mathematics"
                                :description="descriptions['eecs203']"/>
                    <CourseCard course-name="EECS280" course-title="Programming and Intro Data Structures"
                                :description="descriptions['eecs280']"/>
                    <CourseCard course-name="EECS281" course-title="Data Structures and Algorithms"
                                :description="descriptions['eecs281']"/>
                    <CourseCard course-name="EECS370" course-title="Intro to Computer Organization"
                                :description="descriptions['eecs370']"
                                class="course-one-col course-two-col"/>
                    <CourseCard course-name="EECS376" course-title="Fundamentals of Computer Science"
                                :description="descriptions['eecs376']"
                                class="course-one-col course-two-col"/>
                </div>
                <div class="col-12 col-md-6 col-xl-4 flex-grow-1 course-three-col">
                    <CourseCard course-name="EECS370" course-title="Intro to Computer Organization"
                                :description="descriptions['eecs370']"/>
                    <CourseCard course-name="EECS376" course-title="Fundamentals of Computer Science"
                                :description="descriptions['eecs376']"/>
                    <CourseCard course-name="EECS441" course-title="Mobile App Development for Entrepreneurs"
                                :description="descriptions['eecs441']"/>
                </div>
                <div class="col-12 col-md-6 col-xl-4 flex-grow-1">
                    <CourseCard course-name="EECS482" course-title="Introduction to Operating Systems"
                                :description="descriptions['eecs482']"/>
                    <CourseCard course-name="EECS493" course-title="User Interface Development"
                                :description="descriptions['eecs493']"/>
                    <CourseCard course-name="EECS441" course-title="Mobile App Development for Entrepreneurs"
                                :description="descriptions['eecs441']"
                                class="course-one-col course-two-col"/>
                    <CourseCard course-name="EECS485" course-title="Web Development"
                                :description="descriptions['eecs485']"/>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-projects"/>
            <h2><i class="bi-code-slash"/> Projects</h2>
            <ProjectInformation/>
        </div>

        <div class="section container">
            <a class="anchor" id="section-work-exp"/>
            <h2><i class="bi-briefcase"/> Work Experience</h2>
            <div class="container-fluid row g-3">
                <div class="col-12 col-lg-6 col-xl-4 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Instructional Aide</h5>
                            <h6 class="card-subtitle mb-2">University of Michigan</h6>
                            <h6 class="card-subtitle mb-2 text-muted">EECS281 (Fall 2020)</h6>
                            <h6 class="card-subtitle mb-2 text-muted">EECS370 (Winter, Spring 2021)</h6>
                            <hr/>
                            <ul>
                                <li>Part of the teaching staff on two main-sequence courses for computer science
                                   majors (700+ students during Fall and Winter semesters).</li>
                                <li>Taught EECS370 during the double pace spring semester (100+ students)</li>
                                <li>Responsibilities include:
                                    <ul>
                                        <li>Aid students in understanding concepts
                                            and completing the coding projects with regular office hours.</li>
                                        <li>Reinforce conceptual understanding through weekly discussion sections.</li>
                                        <li>Test student understanding of course material by writing exam questions
                                            .</li>
                                        <li>Collaborate with course staff and instructors to ensure that the course
                                        experience is as smooth as possible for students.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-4 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Mathematics Tutor</h5>
                            <h6 class="card-subtitle mb-2">University of Michigan</h6>
                            <h6 class="card-subtitle mb-2">Comprehensive Studies Program</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Fall 2019 - Winter 2021</h6>
                            <hr/>
                            <ul>
                                <li>Tutored students in college-level precalculus and calculus through the
                                    Comprehensive Studies Program (CSP), which aims to serve underrepresented
                                    students.</li>
                                <li>Responsibilities include:
                                    <ul>
                                        <li>Reinforce student understanding of mathematics by guiding them through
                                            solutions to practice problems.</li>
                                        <li>Help students prepare for exams by recognizing and reviewing concepts
                                            that they may be struggling with.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-4 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">You could be here!</h5>
                            <hr/>
                            <p>I'm always on the lookout for new opportunities! If you're interested in working with
                                me, feel free to <a href="#section-contact">contact me</a>!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-research"/>
            <h2><i class="bi-clipboard-data"/> Research Experience</h2>
            <div class="container-fluid row g-3">
                <div class="col-12 col-md-6 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Sanford Lab</h5>
                            <h6 class="card-subtitle mb-1">University of Michigan, Department of Chemistry</h6>
                            <h6 class="card-subtitle mb-2 text-muted">September 2019 - present</h6>
                            <p><span class="bold">Advisor:</span> Prof. Melanie Sanford</p>
                            <hr/>
                            <p class="small">Currently, I am working with <a
                                    href="https://sites.lsa.umich.edu/msanford-lab/" target="_blank"
                                    rel="noopener noreferrer">Prof.
                                Melanie
                                Sanford</a>,
                                continuing my
                                research on C–H activation. Alongside working in the lab to develop new
                                functionalization reactions, I have been working on modeling the C–H activation
                                process computationally.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Young Lab</h5>
                            <h6 class="card-subtitle mb-1">The University of Toledo, Department of Chemistry and
                                Biochemistry</h6>
                            <h6 class="card-subtitle mb-2 text-muted">March 2017 - August 2019</h6>
                            <p><span class="bold">Advisor:</span> Prof. Michael Young</p>
                            <hr/>
                            <p class="small">I worked under <a href="https://www.younggroupchem.com/" target="_blank"
                                                               rel="noopener noreferrer">Prof. Michael
                                Young</a> at The University of Toledo,
                                developing new C–H activation methodology for amine substrates. My research focused
                                on expanding the substrate scope of C–H functionalization reactions by using carbon
                                dioxide to help promote the key C–H activation step.</p>
                            <h6 class="small">Publications:</h6>
                            <ul class="small">
                                <li>Kapoor, M.; <span class="bold" style="text-decoration: underline">Liu, D.</span>; Young,
                                    M. C. "Carbon Dioxide Mediated C(sp3)–H Arylation of Amine Substrates." <span
                                            class="italic">J. Am.
                                        Chem. Soc.</span> <span class="bold">2018</span>,
                                    <span class="italic">140</span>, 6818-6822.</li>
                                <li>
                                    Kapoor, M.; Chand-Thakuri, P.; Maxwell, J. M.;
                                    <span class="bold" style="text-decoration: underline">Liu, D.</span>;
                                    Zhou, H.; Young, M. C. “Carbon Dioxide-Driven Palladium-Catalyzed C–H Activation
                                    of Amines: A Unified Approach for the Arylation of Aliphatic and Aromatic Primary
                                    and Secondary Amines.” <span class="italic">Synlett</span> <span
                                        class="bold">2019</span>, <span class="italic">30</span>, 519-524.
                                </li>
                                <li>
                                    Young, M. C.; Djernes, K. E.; Payton, J. L.; <span class="bold" style="text-decoration: underline">Liu, D.</span>;
                                    Hooley, R. J. “Resorcin[4]arenes: A Simple Scaffold to Study Supramolecular Self-Assembly and Host:Guest Interactions for the Undergraduate Curriculum.”
                                    <span class="italic">J. Chem. Ed.</span> <span class="bold">2019</span>, <span
                                        class="italic">96</span>, 4, 781-785.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-contact"/>
            <h2><i class="bi-chat-left-dots"/> Contact Me!</h2>
            <div class="container">
                <ul style="list-style: none; padding-left: 0;">
                    <li><a href="mailto:danlliu@umich.edu" class="link-clean" target="_blank" rel="noopener noreferrer"><i class="bi-envelope"/> danlliu@umich.edu</a></li>
                    <li><a href="https://github.com/danlliu" class="link-clean" target="_blank" rel="noopener noreferrer"><i class="bi-github"/> github.com/danlliu</a></li>
                </ul>
            </div>
        </div>

        <div class="section container">
            <a class="anchor" id="section-resume"/>
            <h2><i class="bi-file-text"/> Résumé</h2>
            <p>Click below to download my résumé!</p>
            <a href="daniel-liu-resume-cs.pdf" class="bi-download mt-3 link-clean link-black" download>
                computer science résumé (197 KB)
            </a>
            <a href="daniel-liu-resume-condensed.pdf" class="bi-download mt-3 link-clean link-black" download>
                condensed résumé (155 KB)
            </a>
            <a href="daniel-liu-resume.pdf" class="bi-download mt-3 link-clean link-black" download>
                full résumé (160 KB)
            </a>
        </div>
    </div>
</template>

<script>

    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import CourseCard from "@/components/CourseCard";
    import ProjectInformation from "@/components/ProjectInformation";

    export default {
        name: 'Homepage',
        components: {
            CourseCard,
            ProjectInformation
        },
        mounted: function() {

            let beginHelp = () => {
                document.getElementById(`scroll-down`).style.opacity = 1.0
                this.helperInterval = setInterval(() => {
                    document.getElementById('scroll-down').style.bottom = (this.cycle === 1 || this.cycle === 3 ?
                        '24px' : '32px');
                    this.cycle++;
                    this.cycle %= 10;
                }, 250);

            };

            let scrollHandler = () => {

                if (this.helperInterval == null) {
                    this.helperInterval = setTimeout(beginHelp, 500);
                }

                let scrollAmount = window.scrollY;

                if (scrollAmount > 64) {
                    clearInterval(this.helperLightInterval);
                    document.getElementById(`scroll-down`).style.bottom = '32px';
                    document.getElementById(`scroll-down`).style.opacity = '0';
                }

                console.log(`scrollAmount ${scrollAmount}`);
                // hello world label: 0 through 288
                if (scrollAmount <= 288) {
                    document.getElementById('helloworld').style.display = 'inherit';
                    document.getElementById('navbar').style.display = 'none';
                    let scrolledRatio = (scrollAmount) / 288;
                    let background = Math.round(255 * (scrolledRatio));
                    let text = Math.round(255 * (1-scrolledRatio));
                    document.getElementById('helloworld').style.color = `rgb(${text},${text},${text})`;
                    document.querySelector('body').style.backgroundColor = `rgb(${background},${background},${background})`;
                    document.getElementById('section-about-me').style.marginTop =
                        `calc(${Math.min(100,200*(1-scrolledRatio))}vh + 16 px)`;
                    document.getElementById('helloworld').style.fontSize = `${Math.max(32,112 - (scrollAmount) / 288 * 96)}px`;

                    if (scrolledRatio > 0.5) {
                        document.getElementById('helloworld').innerHTML = "daniel liu";
                    } else {
                        document.getElementById('helloworld').innerHTML = "hello world";
                    }

                } else {
                    document.getElementById('helloworld').style.display = 'none';
                    document.getElementById('navbar').style.display = 'inherit';
                    document.querySelector('body').style.backgroundColor = "#FFF";
                }
                // 288 through 416 (128px): opacity of other navbar items as well as background color
                if (scrollAmount >= 288 && scrollAmount <= 416) {
                    let scrolledRatio = (scrollAmount - 288) / 128;
                    let fullColor = [175, 212, 233] // afd4e9ff
                    let shade = [255 - (255 - fullColor[0]) * scrolledRatio, 255 - (255 - fullColor[1]) * scrolledRatio, 255 -
                    (255 - fullColor[2]) * scrolledRatio];
                    document.querySelector('.navbar').style.backgroundColor = `rgb(${shade[0]},${shade[1]},${shade[2]})`;
                    document.querySelector('#navbar-links').style.opacity = `${scrolledRatio}`;
                } else if (scrollAmount > 352) {
                    document.querySelector('.navbar').style.backgroundColor = `rgb(175,212,233)`;
                    document.querySelector('#navbar-links').style.opacity = `1.0`;
                }
            };

            scrollHandler();

            document.addEventListener('scroll', scrollHandler);
        },
        data: function() {
            return {

                helperInterval: null,
                cycle: 0,

                descriptions: {
                    'eecs203':
                        "Foundations of theoretical computer science. EECS203 covers proofs and proof techniques, Boolean logic, combinatorics, induction, sets and functions, relations, and graphs.",
                    'eecs280':
                        `Introductory course to C++. EECS280 covers pointers, dynamic memory, structs and classes, inheritance, data structures such as linked lists and binary search trees, and basic recursion. Projects in EECS280 include:
                        <ul>
                        <li><span class="bold">Euchre</span>: implementation of a game of Euchre, with various parameters able to be specified via command line arguments. Tested understanding of and ability to implement inheritance in C++ classes, as well as polymorphism.</li>
                        <li><span class="bold">Web Server</span>: implementation of a REST API web server for an office hours queue. Tested understanding of and ability to implement linked lists, as well as usage of a C++ library for JSON format.</li>
                        <li><span class="bold">Machine Learning</span>: implementation of a Naive Bayesian classifier based on the bag of words model. Tested understanding of and ability to implement binary search trees, as well as usage of the <span class="font-monospace">std::map</span> class.</li>
                        </ul>`,
                    'eecs281':
                        `Introduction to data structures and algorithms. EECS281 covers algorithms such as binary search, sorting, binary heaps, shortest path algorithms, DFS and BFS, the traveling salesperson problem, and dynamic programming. Projects in EECS281 include:
                        <ul>
                        <li><span class="bold">Puzzle</span>: implemented BFS and DFS algorithms to solve a puzzle game, where the player can open and close pathways by walking over certain tiles.</li>
                        <li><span class="bold">Stocks</span>: used priority queues to simulate a stock market, where buyers and sellers propose different prices. Various statistics can also be printed during the simulation, including a running median (also implemented with priority queues)</li>
                        <li><span class="bold">SillyQL</span>: implementation of a simple version of SQL, with column indices to speed up searching tables. Tested understanding of and ability to use hash maps.</li>
                        <li><span class="bold">Drones</span>: implementation of MST algorithms, and a branch-and-bound search as well as a heuristic-based traveling salesperson solution.</li>
                        </ul>`,
                    'eecs370':
                        `Study of computer architecture. EECS370 covers assembly language, processor datapaths, caching, and virtual memory. Projects in EECS370 include:
                        <ul>
                        <li><span class="bold">Multifile Assembler/Linker</span>: implementation of an assembler and linker for LC2K, a simple assembly language. The assembler converts LC2K assembly files into object files, and the linker combines object files into a machine code file.</li>
                        <li><span class="bold">Pipeline Simulator</span>: simulator for a pipeline datapath, including logic for data forwarding and branch prediction.</li>
                        <li><span class="bold">Cache Simulator</span>: simulator for a single-cycle datapath with a memory cache. Includes support for fully associative, direct mapped, and set associative caches via command line arguments.</li>
                        </ul>`,
                    'eecs376':
                        `Theoretical computer science. EECS376 covers computability, recognizability, Turing Machines, complexity (P vs NP), and cryptography.`,
                    'eecs482':
                        `Study of operating systems and low-level workings of computers. EECS482 covers multithreading and concurrency, virtual memory, file systems, virtual machines, and remote procedure calls. Projects in EECS482 include:
                        <ul>
                        <li><span class="bold">Disk Scheduler</span>: implementation of a multithreaded producer-consumer queue for servicing disk requests, using a shortest seek time first (SSTF) algorithm.</li>
                        <li><span class="bold">Thread Library</span>: implementation of various multithreading utilities, such as threads, mutexes, and condition variables, as well as handling context switches between threads and blocking threads.</li>
                        <li><span class="bold">Virtual Memory</span>: implementation of a memory management unit (MMU) to manage virtual memory inside a portion of a process's address space. Tested the understanding of the implementation of virtual memory, including page tables, paging in and out from disk, and the clock eviction algorithm.</li>
                        <li><span class="bold">File Server</span>: implementation of a file server working with inodes on disk to represent files. Tested understanding of the underlying implementation of file systems, as well as the usage of Berkeley sockets.</li>
                        </ul>`,
                    'eecs493':
                        `Study of user interface design, including human-centered design and human-computer interaction. EECS493 covers the basic principles of good user interface, as well as ways to make designs more user-friendly and accessible. Means of testing user interfaces, such as heuristic evaluation and user studies, are covered. The principles of universal design are covered near the end of the course, and the group final project involves designing a web application revolving around human-centered design principles, and evaluating its user interface. Our final project was <span class="font-monospace">kernel</span>, which is an app that helps you track time spent on various tasks and keep your tasks in order. The final form of <span class="font-monospace">kernel</span> can be found <a href="https://danlliu.github.io/kernel" target="_blank" rel="noopener noreferrer">here</a>.`,
                    'eecs441':
                        `<span style="color: var(--rose-madder)">Upcoming Fall 2021!</span> Stay tuned!`,
                    'eecs485':
                        `<span style="color: var(--rose-madder)">Upcoming Fall 2021!</span> Stay tuned!`
                }

            }
        }
    }
</script>

<style>

    .section {
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .edu-card {
        min-width: 20rem;
    }

    .link-clean {
        text-decoration: none;
        display: block;
    }

    .link-black {
        color: #000;
    }

    .anchor {
        display: block;
        position: relative;
        top: -88px;
        visibility: hidden;
    }

    @media (max-width: 767.98px) {
        .course-two-col:not(.course-one-col), .course-three-col:not(.course-one-col) {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1199.98px) {
        .course-one-col:not(.course-two-col), .course-three-col:not(.course-two-col) {
            display: none;
        }
    }

    @media (min-width: 1200px) {
        .course-one-col:not(.course-three-col), .course-two-col:not(.course-three-col) {
            display: none;
        }
    }

</style>

<template>
    <div class="container-fluid row py-3" id="pi-outer">
        <div class="col-xl-5 mb-3 list-group" id="pi-list" style="overflow-y: auto">
            <a v-for="(info, idx) of projectInformation" :key="idx" @click="click(idx)"
               class="list-group-item list-group-item-action" :class="currentIdx === idx && 'active'"
               :aria-current="currentIdx === idx ? 'true' : 'false'">
                {{info.name}}
            </a>
        </div>
        <hr id="pi-line"/>
        <div class="col-xl-7 mb-3" style="overflow-y: auto" id="pi-info">
            <!-- project info goes here -->
            <div class="p-3" v-if="currentIdx !== -1"
                 v-html="`<h3>${projectInformation[currentIdx].name}</h3>` + projectInformation[currentIdx].html"/>
            <p class="p-3" v-else>Click on one of the projects in the list to learn more about it!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectInformation",
        data: function() {
            return {
                currentIdx: -1,

                projectInformation: [
                    {
                        name: "danlliu.github.io",
                        html:
                            `<p>You're here right now! This is my personal website, built with Vue.js and Bootstrap. You can find the source code
                             at
                             <a href="https://github.com/danlliu/danlliu.github.io" target="_blank" rel="noopener noreferrer">github.com/danlliu/danlliu.github.io</a>.</p>`
                    },
                    {
                        name: "beep boop",
                        html:
                        `<p><span class="italic">beep boop</span> is the first programming language I designed, and it was the start of a series of programming languages all based on ideas from friends and group chats. <span class="italic">beep boop</span> was inspired by the esoteric language "chicken". In <span class="italic">beep boop</span>, there are two keywords: <span class="font-monospace">beep</span> and <span class="font-monospace">boop</span>. Using these, along with a stack and two registers, it's possible to write programs such as Hello World, Fibonacci, and a recursive factorial algorithm.</p>
                         <p>If you'd like to check out <span class="italic">beep boop</span> for yourself, you can find it <a href="https://danlliu.github.io/beepboop" target="_blank" rel="noopener noreferrer">here</a>!</p>`
                    },
                    {
                        name: "shift",
                        html:
                        `<p>Second of four in the programming languages series of projects, <span class="italic">shift</span> is a return to a more traditional syntax. Using only characters that can be accessed when the Shift key is held down on a U.S. layout keyboard, and taking inspiration from Bash syntax, shift provides 26 registers and 4096 words of memory for the program. Although stack frames are a bit trickier to work with, the readability is very much improved over beep boop.</p>
                        <p>If you'd like to check out <span class="italic">shift</span> for yourself, you can find it <a href="https://danlliu.github.io/shift" target="_blank" rel="noopener noreferrer"> here</a>!</p>`
                    },
                    {
                        name: "this is all made up",
                        html:
                        `<p>The third programming language, <span class="italic">this is all made up</span> combines elements of assembly and two-dimensional languages such as Befunge to create one of the strangest and most challenging programming languages. The interface may seem overwhelming, but is almost essential in debugging programs. "this is all made up" was made to be a challenging puzzle, and even a simple operation as addition can take nearly 30 lines of code and multiple hours of planning to implement correctly.</p>
                        <p>If you'd like to check out <span class="italic">this is all made up</span> for yourself, you can find it <a href="https://danlliu.github.io/thisisallmadeup" target="_blank" rel="noopener noreferrer">here</a>! Good luck :)</p>`
                    },
                    {
                        name: "creative writing",
                        html:
                        `<p>The most recent programming language design project, <span class="italic">creative writing</span> uses keywords chosen from the most common English words. It takes inspiration from the concept of polymorphic code, where the same program can be called in multiple different languages without modification. The choice of keywords allows creative writing programs to be disguised as other programming languages, notes, or short stories. Words with extremely high frequencies were also avoided to make it easier for programmers to develop their program in their format of choice. This is also the first language where the documentation can be found on the same page as the program input, thus removing the need for new programmers to flip between tabs to check instructions.</p>
                        <p>If you'd like to check out <span class="italic">creative writing</span> for yourself, you can find it <a href="https://danlliu.github.io/creativewriting" target="_blank" rel="noopener noreferrer">here</a>!</p>`
                    },
                    {
                        name: "LC2K01",
                        html:
                        `<p>Learning assembly language is almost a rite of passage for programmers. You no longer have the comforts of the compiler and programming language managing some aspects of memory for you, but instead you have full control over the contents of memory. The number of variables that can be quickly accessed is limited by your registers. I wanted to create a simulator for those learning assembly to try out short segments without worrying about setting up an entire program. I chose to use the LEGv8 ISA, which is a subset of the ARMv8 ISA. To make writing assembly a bit simpler, I also included preprocessor directives such as %, FILL, and ALIGN, as well as a HLT instruction.</p>
                        <p>If you'd like to check out LC2K01 for yourself, you can find it <a href="https://danlliu.github.io/lc2k01" target="_blank" rel="noopener noreferrer">here</a>!</p>`
                    },
                    {
                        name: "Maze Maker",
                        html:
                        `<p>One of my earliest HTML projects, I implemented the Aldous-Broder algorithm to randomly generate mazes of an arbitrary size. The mazes are displayed using HTML canvas. Due to the algorithm used to generate the maze, every cell is reachable from the beginning, and there is a unique solution from beginning to end.</p>
                        <p>If you'd like to check out Maze Maker for yourself, you can find it <a href="https://danlliu.github.io/Maze-Maker" target="_blank" rel="noopener noreferrer">here</a>!</p>`
                    },
                    {
                        name: "chatroom",
                        html:
                        `<p><span class="italics">chatroom</span> is a chat application that allows users to create and join rooms. Each user is uniquely identified by a random string of four hex digits. Users can tag each other using their identifier. Using socket.io, multiple computers on the same network can join the same rooms, and different rooms will not intefere with each other.</p>
                         <h4>Image Gallery:</h4>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/chatroom1.png" aria-describedby="chatroom1-caption">
                            </div>
                            <small id="chatroom1-caption">The main interface of chatroom.</small>
                         </div>`
                    },
                    {
                        name: "Turret Wars",
                        html:
                        `<p>Over the course of approximately a week, I designed a space-themed shooter game. In this game, your aim is to take out turrets before they take you out. After a few levels, you're able to use shields to take damage, and later on use an EMP to stop turrets from shooting temporarily. The project as a whole was over 3000 lines of Swift code, and was coded using Apple's SpriteKit framework for the physics and animation.</p>
                         <h4>Image Gallery:</h4>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/turret1.png" aria-describedby="turret1-caption">
                            </div>
                            <small id="turret1-caption">A sniper turret shooting a bullet at the player.</small>
                         </div>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/turret2.png" aria-describedby="turret2-caption">
                            </div>
                            <small id="turret2-caption">A basic turret shooting at the player, who can hide behind the barriers for cover.</small>
                         </div>
                         <div class="container mb-3">
                            <div>
                                <img class="img-fluid" src="img/turret3.png" aria-describedby="turret3-caption">
                            </div>
                            <small id="turret3-caption">The upgrade screen of Turret Wars, allowing the player to make their spaceship better.</small>
                         </div>`
                    },
                    {
                        name: "linktracker",
                        html:
                        `<p>During the pandemic, many of us use virtual conferencing software such as Zoom or Google Meet to collaborate with others. However, it can be tough to keep track of the myriad links used to join different meetings. That's why I developed linktracker, an app that helps you keep track of meeting links in your browser. Using the browser's storage, linktracker is able to remember when your meetings take place and the links associated with them, and gives you the option to filter events in different ways. linktracker also includes some convenience features such as editing events, and dark mode.</p>
                        <p>If you'd like to try out linktracker for yourself, you can find it <a href="https://danlliu.github.io/linktracker" target="_blank" rel="noopener noreferrer">here</a>!</p>`
                    }
                ]
            }
        },
        methods: {
            click: function(index) {
                console.log(`click ${index}`);
                this.currentIdx = index;
            }
        }
    }
</script>

<style scoped>

    #pi-outer {
        height: 85vh;
    }

    #pi-list {
        height: 100%;
    }

    #pi-info {
        height: 100%;
    }

    #pi-line {
        display: none;
    }

    small {
        display: block;
    }

    @media (max-width: 1199.98px) {

        #pi-outer {
            height: 125vh;
        }

        #pi-list {
            height: 20%;
        }

        #pi-info {
            height: 80%;
        }

        #pi-line {
            display: initial;
        }
    }
</style>

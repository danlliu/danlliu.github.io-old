<template>
    <div class="card m-3 course-card">
        <div class="card-body">
            <h5 class="card-title">{{courseName}}</h5>
            <h6 class="card-subtitle mb-2">{{courseTitle}}</h6>
            <hr/>
            <div class="collapse" ref="info" v-html="description+`<hr/>`" style="font-size: smaller"/>
            <small class="mt-5 text-muted d-block" @click="toggle()">
                {{shown ? "show less" : "more information..."}}
            </small>
        </div>
    </div>
</template>

<script>

    import { Collapse } from 'bootstrap';

    export default {
        name: "CourseCard",
        data: function() {
            return {
                collapseItem: null,
                shown: false
            }
        },
        methods: {
            toggle: function() {
                this.collapseItem.toggle();
                this.shown = !this.shown
            }
        },
        mounted: function() {
            this.collapseItem = new Collapse(this.$refs['info'], {toggle: false})
        },
        props: {
            courseName: String,
            courseTitle: String,
            description: String
        }
    }
</script>

<style scoped>

    small {
        transition: margin-bottom 0.5s ease
    }

    small:hover {
        color: var(--indigo-dye);
        cursor: pointer;
    }
</style>

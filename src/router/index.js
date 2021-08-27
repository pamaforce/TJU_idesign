import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import majorIntroduction from '../views/majorIntroduction/majorIntroduction'
import mission from '../views/majorIntroduction/mission.vue'
import doctoralSupervisor from '../views/majorIntroduction/doctoralSupervisor.vue'
import masterSupervisor from '../views/majorIntroduction/masterSupervisor.vue'
import experimentalTeacher from '../views/majorIntroduction/experimentalTeacher.vue'
import development from '../views/majorIntroduction/development.vue'
import contactUs from '../views/majorIntroduction/contactUs.vue'
import conditions from '../views/majorIntroduction/conditions.vue'
import news from '../views/news/news.vue'
import theNews from '../views/news/theNews.vue'
import activity from '../views/news/activity.vue'
import curriculum from '../views/news/curriculum.vue'
import curriculumDesign from '../views/news/curriculumDesign.vue'
import exhibition from '../views/news/exhibition.vue'
import graduationProject from '../views/news/graduationProject.vue'
import lecture from '../views/news/lecture.vue'
import meeting from '../views/news/meeting.vue'
import success from '../views/news/success.vue'
import workshop from '../views/news/workshop.vue'
import education from '../views/education/education.vue'
import alumniAndAlumnae from '../views/education/alumniAndAlumnae.vue'
import cooperation from '../views/education/cooperation.vue'
import innovationAndEntrepreneurship from '../views/education/innovationAndEntrepreneurship.vue'
import postgraduate from '../views/education/postgraduate.vue'
import undergraduate from '../views/education/undergraduate.vue'
import seminar from '../views/internationalExchange/seminar.vue'
import EnglishCourse from '../views/internationalExchange/EnglishCourse.vue'
import designWorkshop from '../views/internationalExchange/designWorkshop.vue'
import gallery from '../views/gallery/gallery.vue'
import awardWinningWork from '../views/gallery/awardWinningWork.vue'
import cooperationAchievements from '../views/gallery/cooperationAchievements.vue'
import excellentCurriculumDesign_u from '../views/gallery/excellentCurriculumDesign_u.vue'
import excellentCurriculumDesign_p from '../views/gallery/excellentCurriculumDesign_p.vue'
import excellentGraduationProject from '../views/gallery/excellentGraduationProject.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/majorIntroduction',
        component: majorIntroduction,
        children: [{
                path: 'mission',
                component: mission,
                name: 'a'
            },
            {
                path: 'doctoralSupervisor',
                component: doctoralSupervisor,
                name: 'd'
            },
            {
                path: 'masterSupervisor',
                component: masterSupervisor,
                name: 'e'
            },
            {
                path: 'experimentalTeacher',
                component: experimentalTeacher,
                name: 'f'
            },
            {
                path: 'development',
                component: development,
                name: 'b'
            },
            {
                path: 'contactUs',
                component: contactUs,
                name: 'g'
            },
            {
                path: 'conditions',
                component: conditions,
                name: 'c'
            },
        ]
    },
    {
        path: '/education',
        component: education,
        children: [{
                path: 'alumniAndAlumnae',
                component: alumniAndAlumnae,
                name: 'l'
            },
            {
                path: 'cooperation',
                component: cooperation,
                name: 'j'
            },
            {
                path: 'innovationAndEntrepreneurship',
                component: innovationAndEntrepreneurship,
                name: 'k'
            },
            {
                path: 'postgraduate',
                component: postgraduate,
                name: 'i'
            },
            {
                path: 'undergraduate',
                component: undergraduate,
                name: 'h'
            }
        ]
    },
    {
        path: "/gallery",
        component: gallery,
        children: [{
                path: 'awardWinningWork',
                component: awardWinningWork,
                name: 't'
            },
            {
                path: 'cooperationAchievements',
                component: cooperationAchievements,
                name: 's'
            },
            {
                path: 'excellentCurriculumDesign_u',
                component: excellentCurriculumDesign_u,
                name: 'p'
            },
            {
                path: 'excellentCurriculumDesign_p',
                component: excellentCurriculumDesign_p,
                name: 'q'
            },
            {
                path: 'excellentGraduationProject',
                component: excellentGraduationProject,
                name: 'r'
            }
        ]
    },
    {
        path: '/news',
        component: news,
        children: [{
                path: 'activity',
                component: activity,
                name: 'z8'
            },
            {
                path: 'curriculum',
                component: curriculum,
                name: 'z3'
            },
            {
                path: 'curriculumDesign',
                component: curriculumDesign,
                name: 'z4'
            },
            {
                path: 'exhibition',
                component: exhibition,
                name: 'z2'
            },
            {
                path: 'graduationProject',
                component: graduationProject,
                name: 'z5'
            },
            {
                path: 'lecture',
                component: lecture,
                name: 'z1'
            },
            {
                path: 'meeting',
                component: meeting,
                name: 'z7'
            },
            {
                path: 'success',
                component: success,
                name: 'z9'
            },
            {
                path: 'workshop',
                component: workshop,
                name: 'z6'
            },
            {
                path: ':category_id/:id',
                component: theNews
            }
        ]
    },
    {
        path: '/internationalExchange/designWorkshop',
        component: designWorkshop
    },
    {
        path: '/internationalExchange/EnglishCourse',
        component: EnglishCourse
    },
    {
        path: '/internationalExchange/seminar',
        component: seminar
    },
    {
        path: '*',
        redirect: '/'
    },
]

const router = new VueRouter({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes
})

export default router
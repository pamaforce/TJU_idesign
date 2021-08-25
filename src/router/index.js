import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import majorIntroduction from '../views/majorIntroduction/majorIntroduction'
import mission from '../views/majorIntroduction/mission.vue'
import faculty from '../views/majorIntroduction/faculty.vue'
import development from '../views/majorIntroduction/development.vue'
import contactUs from '../views/majorIntroduction/contactUs.vue'
import conditions from '../views/majorIntroduction/conditions.vue'
import activity from '../views/news/activity.vue'
import curriculum from '../views/news/curriculum.vue'
import curriculumDesign from '../views/news/curriculumDesign.vue'
import exhibition from '../views/news/exhibition.vue'
import graduationProject from '../views/news/graduationProject.vue'
import lecture from '../views/news/lecture.vue'
import meeting from '../views/news/meeting.vue'
import success from '../views/news/success.vue'
import workshop from '../views/news/workshop.vue'
import alumniAndAlumnae from '../views/education/alumniAndAlumnae.vue'
import cooperation from '../views/education/cooperation.vue'
import innovationAndEntrepreneurship from '../views/education/innovationAndEntrepreneurship.vue'
import postgraduate from '../views/education/postgraduate.vue'
import undergraduate from '../views/education/undergraduate.vue'
import seminar from '../views/internationalExchange/seminar.vue'
import EnglishCourse from '../views/internationalExchange/EnglishCourse.vue'
import designWorkshop from '../views/internationalExchange/designWorkshop.vue'
import awardWinningWork from '../views/gallery/awardWinningWork.vue'
import cooperationAchievements from '../views/gallery/cooperationAchievements.vue'
import excellentCurriculumDesign from '../views/gallery/excellentCurriculumDesign.vue'
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
                component: mission
            },
            {
                path: 'faculty',
                component: faculty
            },
            {
                path: 'development',
                component: development
            },
            {
                path: 'contactUs',
                component: contactUs
            },
            {
                path: 'conditions',
                component: conditions
            },
        ]
    },
    {
        path: '/news/activity',
        component: activity
    },
    {
        path: '/news/curriculum',
        component: curriculum
    },
    {
        path: '/news/curriculumDesign',
        component: curriculumDesign
    },
    {
        path: '/news/exhibition',
        component: exhibition
    },
    {
        path: '/news/graduationProject',
        component: graduationProject
    },
    {
        path: '/news/lecture',
        component: lecture
    },
    {
        path: '/news/meeting',
        component: meeting
    },
    {
        path: '/news/success',
        component: success
    },
    {
        path: '/news/workshop',
        component: workshop
    },
    {
        path: '/education/alumniAndAlumnae',
        component: alumniAndAlumnae
    },
    {
        path: '/education/cooperation',
        component: cooperation
    },
    {
        path: '/education/innovationAndEntrepreneurship',
        component: innovationAndEntrepreneurship
    },
    {
        path: '/education/postgraduate',
        component: postgraduate
    },
    {
        path: '/education/undergraduate',
        component: undergraduate
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
        path: '/gallery/awardWinningWork',
        component: awardWinningWork
    },
    {
        path: '/gallery/cooperationAchievements',
        component: cooperationAchievements
    },
    {
        path: '/gallery/excellentCurriculumDesign',
        component: excellentCurriculumDesign
    },
    {
        path: '/gallery/excellentGraduationProject',
        component: excellentGraduationProject
    },
    {
        path: '*',
        redirect: '/'
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
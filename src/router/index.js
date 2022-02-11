import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import majorIntroduction from '../views/majorIntroduction/majorIntroduction'
import mission from '../views/majorIntroduction/mission.vue'
import doctoralSupervisor from '../views/majorIntroduction/doctoralSupervisor.vue'
import masterSupervisor from '../views/majorIntroduction/masterSupervisor.vue'
import experimentalTeacher from '../views/majorIntroduction/experimentalTeacher.vue'
import externalFaculty from '../views/majorIntroduction/externalFaculty.vue'
import retiredTeacher from '../views/majorIntroduction/retiredTeacher.vue'
import development from '../views/majorIntroduction/development.vue'
import contactUs from '../views/majorIntroduction/contactUs.vue'
import conditions from '../views/majorIntroduction/conditions.vue'
import news from '../views/news/news.vue'
import theNews_1 from '../views/news/theNews_1.vue'
import theNews_2 from '../views/education/theNews_2.vue'
import theNews_3 from '../views/internationalExchange/theNews_3.vue'
import activity from '../views/news/activity.vue'
import curriculum from '../views/news/curriculum.vue'
import curriculumDesign from '../views/news/curriculumDesign.vue'
import exhibition from '../views/news/exhibition.vue'
import graduationProject from '../views/news/graduationProject.vue'
import lecture1 from '../views/news/lecture1.vue'
import lecture2 from '../views/news/lecture2.vue'
import meeting from '../views/news/meeting.vue'
import success from '../views/news/success.vue'
import workshop from '../views/news/workshop.vue'
import education from '../views/education/education.vue'
import alumniAndAlumnae from '../views/education/alumniAndAlumnae.vue'
import cooperation from '../views/education/cooperation.vue'
import innovationAndEntrepreneurship from '../views/education/innovationAndEntrepreneurship.vue'
import postgraduate from '../views/education/postgraduate.vue'
import undergraduate from '../views/education/undergraduate.vue'
import internationalExchange from '../views/internationalExchange/internationalExchange.vue'
import seminar from '../views/internationalExchange/seminar.vue'
import EnglishCourse from '../views/internationalExchange/EnglishCourse.vue'
import designWorkshop from '../views/internationalExchange/designWorkshop.vue'
import gallery from '../views/gallery/gallery.vue'
import awardWinningWork from '../views/gallery/awardWinningWork.vue'
import cooperationAchievements from '../views/gallery/cooperationAchievements.vue'
import excellentCurriculumDesignU from '../views/gallery/excellentCurriculumDesignU.vue'
import excellentCurriculumDesignP from '../views/gallery/excellentCurriculumDesignP.vue'
import excellentGraduationProject from '../views/gallery/excellentGraduationProject.vue'
import detail from '../views/gallery/detail.vue'
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
                name: 'd1'
            },
            {
                path: 'masterSupervisor',
                component: masterSupervisor,
                name: 'd2'
            },
            {
                path: 'experimentalTeacher',
                component: experimentalTeacher,
                name: 'd3'
            },
            {
                path: 'externalFaculty',
                component: externalFaculty,
                name: 'd4'
            },
            {
                path: 'retiredTeacher',
                component: retiredTeacher,
                name: 'd5'
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
                path: 'alumniAndAlumnae/:year?',
                component: alumniAndAlumnae,
                name: 'l',
                props: route => ({ year: route.params.year })
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
            },
            {
                path: ':category_id/:id',
                component: theNews_2,
                props: route => ({ list: route.query.list, current: route.query.current, from: route.query.from })
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
                path: 'excellentCurriculumDesignU',
                component: excellentCurriculumDesignU,
                name: 'p'
            },
            {
                path: 'excellentCurriculumDesignP',
                component: excellentCurriculumDesignP,
                name: 'q'
            },
            {
                path: 'excellentGraduationProject',
                component: excellentGraduationProject,
                name: 'r'
            },
            {
                path: ':category_id/:id',
                component: detail,
                name: 'detail',
                props: route => ({ list: route.query.list, current: route.query.current, from: route.query.from })
            },
        ]
    },
    {
        path: '/news',
        component: news,
        children: [{
                path: 'activity',
                component: activity,
                name: 'z8',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'curriculum',
                component: curriculum,
                name: 'z3',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'curriculumDesign',
                component: curriculumDesign,
                name: 'z4',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'exhibition',
                component: exhibition,
                name: 'z2',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'graduationProject',
                component: graduationProject,
                name: 'z5',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'lecture1',
                component: lecture1,
                name: 'z11',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'lecture2',
                component: lecture2,
                name: 'z12',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'meeting',
                component: meeting,
                name: 'z7',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'success',
                component: success,
                name: 'z9',
                props: route => ({ page: route.query.page })
            },
            {
                path: 'workshop',
                component: workshop,
                name: 'z6',
                props: route => ({ page: route.query.page })
            },
            {
                path: ':category_id/:id',
                component: theNews_1,
                props: route => ({ list: route.query.list, current: route.query.current, from: route.query.from })
            }
        ]
    },
    {
        path: "/internationalExchange",
        component: internationalExchange,
        children: [{
                path: 'designWorkshop',
                component: designWorkshop,
                name: "y2"
            },
            {
                path: 'EnglishCourse',
                component: EnglishCourse,
                name: "y1"
            },
            {
                path: 'seminar',
                component: seminar,
                name: "y3"
            },
            {
                path: ':category_id/:id',
                component: theNews_3,
                props: route => ({ list: route.query.list, current: route.query.current, from: route.query.from })
            }
        ]
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
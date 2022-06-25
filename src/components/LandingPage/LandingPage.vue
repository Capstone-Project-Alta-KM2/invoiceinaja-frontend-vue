<template>
    <div class="landing-page overflow-x-hidden bg-white">
        <banner-landing-page/>
        <our-features/>
        <user-testimonies/>
        <trusted-by/>
        <landing-footer/>
    </div>
</template>

<script>
import BannerLandingPage from './BannerLandingPage.vue'
import LandingFooter from './LandingFooter.vue'
import OurFeatures from './OurFeatures.vue'
import TrustedBy from './TrustedBy.vue'
import UserTestimonies from './UserTestimonies.vue'
export default {
    name: 'LandingPage',
    components: {
        BannerLandingPage,
        OurFeatures,
        UserTestimonies,
        TrustedBy,
        LandingFooter,

    }
}
</script>

<style>

</style>,
        
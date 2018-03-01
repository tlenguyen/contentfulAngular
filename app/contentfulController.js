app.controller('contentfulController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Contentful Frontend Testing'
        };

        $scope.model.placements = [
            {
                name: 'Homepage Container',
                link: 'https://pp.grubhub.com/?chiri_homepage-container=',
                id: '1'
            },
            {
                name: 'Homepage Hero',
                link: 'https://pp.grubhub.com/?chiri_homepage-hero-content=',
                id: '2'
            },
            {
                name: 'Homepage Top',
                link: 'https://pp.grubhub.com/?chiri_homepage-top-content=',
                id: '3'
            },
            {
                name: 'Homepage Middle',
                link: 'https://pp.grubhub.com/?chiri_homepage-middle-content=',
                id: '4'
            },
            {
                name: 'Homepage Footer',
                link: 'https://pp.grubhub.com/?chiri_homepage-footer-content=',
                id: '5'
            },
            {
                name: 'Homepage Subfooter',
                link: 'https://pp.grubhub.com/?chiri_homepage-subfooter-content=',
                id: '6'
            },
            {
                name: 'Let\'s Eat Container',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-container=',
                id: '7'
            },
            {
                name: 'Let\'s Eat Hero',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-hero-content=',
                id: '8'
            },
            {
                name: 'Let\'s Eat Top',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-top-content=',
                id: '9'
            },
            {
                name: 'Let\'s Eat Middle',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-middle-content=',
                id: '10'
            },
            {
                name: 'Let\'s Eat Footer',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-footer-content=',
                id: '11'
            },
            {
                name: 'Let\'s Eat Subfooter',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-subfooter-content=',
                id: '12'
            },
            {
                name: 'Search',
                link: 'https://pp.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&latitude=37.78666305&longitude=-122.39997101&facet=open_now%3Atrue&variationId=default-impressionScoreViewAdjSearchOnlyBuffed-20160607&sortSetId=umamiV2&sponsoredSize=3&countOmittingTimes=true?chiri_search-banner=',
                id: '13'
            },
            {
                name: 'Restaurant',
                link: 'https://pp.grubhub.com/restaurant/india-clay-oven-restaurant-and-full-bar-2436-clement-st-san-francisco/54117?chiri_restaurant-banner=',
                id: '14'
            }
        ];
    }
]);
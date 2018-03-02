app.controller('contentfulController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Contentful Frontend Testing'
        };

        $scope.model.homepage = [
            {
                name: 'Container',
                link: 'https://pp.grubhub.com/?chiri_homepage-container='
            },
            {
                name: 'Hero',
                link: 'https://pp.grubhub.com/?chiri_homepage-hero-content='
            },
            {
                name: 'Top',
                link: 'https://pp.grubhub.com/?chiri_homepage-top-content='
            },
            {
                name: 'Middle',
                link: 'https://pp.grubhub.com/?chiri_homepage-middle-content='
            },
            {
                name: 'Footer',
                link: 'https://pp.grubhub.com/?chiri_homepage-footer-content='
            },
            {
                name: 'Subfooter',
                link: 'https://pp.grubhub.com/?chiri_homepage-subfooter-content='
            }
        ];

        $scope.model.letsEat = [
            {
                name: 'Container',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-container='
            },
            {
                name: 'Hero',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-hero-content='
            },
            {
                name: 'Top',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-top-content='
            },
            {
                name: 'Middle',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-middle-content='
            },
            {
                name: 'Footer',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-footer-content='
            },
            {
                name: 'Subfooter',
                link: 'https://pp.grubhub.com/lets-eat/?chiri_homepage-subfooter-content='
            }
        ];

        $scope.model.search = [
            {
                name: 'Top',
                link: 'https://pp.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV2&pageSize=20&hideHateos=true&searchMetrics=true&latitude=37.78666305&longitude=-122.39997101&facet=open_now%3Atrue&variationId=default-impressionScoreViewAdjSearchOnlyBuffed-20160607&sortSetId=umamiV2&sponsoredSize=3&countOmittingTimes=true?chiri_search-banner='
            }
        ];

        $scope.model.restaurant = [
            {
                name: 'Top',
                link: 'https://pp.grubhub.com/restaurant/india-clay-oven-restaurant-and-full-bar-2436-clement-st-san-francisco/54117?chiri_restaurant-banner='
            }
        ];

        $scope.model.orderStatus = [
            {
                    name: 'Container',
                    link: 'https://pp.grubhub.com/'
            },
            {
                    name: 'Top',
                    link: 'https://pp.grubhub.com/'
            },
            {
                    name: 'Footer',
                    link: 'https://pp.grubhub.com/'
            },
            {
                    name: 'Receipt',
                    link: 'https://pp.grubhub.com/'
            }
        ];

        $scope.model.orderReceipt = [
            {
                name: 'Container',
                link: 'https://pp.grubhub.com/'
            },
            {
                name: 'Top',
                link: 'https://pp.grubhub.com/'
            },
            {
                name: 'Receipt',
                link: 'https://pp.grubhub.com/'
            }
        ];

        $scope.model.thankYou = [
            {
                name: 'Container',
                link: 'https://pp.grubhub.com/'
            },
            {
                name: 'Top',
                link: 'https://pp.grubhub.com/'
            },
            {
                name: 'Footer',
                link: 'https://pp.grubhub.com/'
            },
            {
                name: 'Receipt',
                link: 'https://pp.grubhub.com/'
            },
        ];
    }
]);
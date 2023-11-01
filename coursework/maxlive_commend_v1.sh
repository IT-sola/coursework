
docker build -t maxmassmatrix/recommendation_service ./recommendationScheduler
docker build -t maxmassmatrix/uploading_service ./uploadingScheduler
docker build -t maxmassmatrix/authentication_service ./authenticationServer
docker build -t maxmassmatrix/authorzation_service ./authorzationServer
docker build -t maxmassmatrix/personalized_service ./personalizedScheduler
docker build -t maxmassmatrix/region_service ./regionScheduler
docker build -t maxmassmatrix/subcription_service ./subcriptionScheduler
docker build -t maxmassmatrix/maxlive_net ./maxlive_net



docker run -d --name recommendation_container -p 8080:8080 maxmassmatrix/recommendation_service 
docker run -d --name uploading_service_container -p 8081:8080 maxmassmatrix/uploading_service
docker run -d --name authentication_service_container -p 8082:8080 maxmassmatrix/authentication_service
docker run -d --name authorzation_service_container -p 8083:8080 maxmassmatrix/authorzation_service
docker run -d --name personalized_service_container -p 8084:8080 maxmassmatrix/personalized_service 
docker run -d --name region_service_container -p 8085:8080 maxmassmatrix/region_service
docker run -d --name subcription_service_container -p 8086:8080 maxmassmatrix/subcription_service
docker run -d --name maxlive_net_container -p 8087:8080 maxmassmatrix/maxlive_net



docker image push maxmassmatrix/recommendation_service
docker image push maxmassmatrix/uploading_service
docker image push maxmassmatrix/authentication_service
docker image push maxmassmatrix/authorzation_service
docker image push maxmassmatrix/personalized_service 
docker image push maxmassmatrix/region_service
docker image push maxmassmatrix/subcription_service
docker image push maxmassmatrix/maxlive_net
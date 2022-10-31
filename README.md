# calculator-rn

# Running Docker

Let’s build the docker container using this command:

> > docker run -it --rm --name react_native_app \

           -p 19006:19006 \
           -v (pwd):/opt/react_native_app/app:delegated \
           -v notused:/opt/react_native_app/app/node_modules \
           react_native_app

# Docker

 <img src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg" alt="docker" width="100" height="100"/>



You can follow along this 101 tutorial[](http://localhost/tutorial/)

`docker run -d -p 80:80 docker/getting-started`


Building the App's Container Image¶
In order to build the application, we need to use a `Dockerfile`. A Dockerfile is simply a text-based script of instructions that is used to create a container image. If you've created Dockerfiles before, you might see a few flaws in the Dockerfile below. But, don't worry! We'll go over them.

Create a file named Dockerfile in the same folder as the file package.json with the following contents.

```docker
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
```
Please check that the file Dockerfile has no file extension like .txt. Some editors may append this file extension automatically and this would result in an error in the next step.

If you haven't already done so, open a terminal and go to the app directory with the Dockerfile. Now build the container image using the docker build command.


docker build -t getting-started .
This command used the Dockerfile to build a new container image. You might have noticed that a lot of "layers" were downloaded. This is because we instructed the builder that we wanted to start from the node:12-alpine image. But, since we didn't have that on our machine, that image needed to be downloaded.

After the image was downloaded, we copied in our application and used yarn to install our application's dependencies. The CMD directive specifies the default command to run when starting a container from this image.

Finally, the -t flag tags our image. Think of this simply as a human-readable name for the final image. Since we named the image getting-started, we can refer to that image when we run a container.

The . at the end of the docker build command tells that Docker should look for the Dockerfile in the current directory.

Starting an App Container¶
Now that we have an image, let's run the application! To do so, we will use the docker run command (remember that from earlier?).

Start your container using the docker run command and specify the name of the image we just created:


`docker run -dp 3000:3000 getting-started`
Remember the `-d` and `-p` flags? We're running the new container in "detached" mode (in the background) and creating a mapping between the host's port 3000 to the container's port 3000. Without the port mapping, we wouldn't be able to access the application.

After a few seconds, open your web browser to `http://localhost:3000`. You should see our app!

emoving a container using the CLI¶
Get the ID of the container by using the docker ps command.


`docker ps`
Use the docker stop command to stop the container.


> Swap out `<the-container-id>` with the ID from docker ps


`docker stop <the-container-id>`
Once the container has stopped, you can remove it by using the docker rm command.


`docker rm <the-container-id>`
:::tip Pro tip

You can stop and remove a container in a single command by adding the "force" flag to the docker rm command. For example:
`docker rm -f <the-container-id>`
:::

Pushing our Image¶
In the command line, try running the push command you see on Docker Hub. Note that your command will be using your namespace, not "docker".

`$ docker push docker/getting-started`
::: danger Error message
The push refers to repository [docker.io/docker/getting-started]
An image does not exist locally with the tag: docker/getting-started
:::
Why did it fail? The push command was looking for an image named docker/getting-started, but didn't find one. If you run docker image ls, you won't see one either.

To fix this, we need to "tag" our existing image we've built to give it another name.

Login to the Docker Hub using the command `docker login -u YOUR-USER-NAME`.

Use the docker tag command to give the getting-started image a new name. Be sure to swap out YOUR-USER-NAME with your Docker ID.


`docker tag getting-started YOUR-USER-NAME/getting-started`
Now try your push command again. If you're copying the value from Docker Hub, you can drop the tagname portion, as we didn't add a tag to the image name. If you don't specify a tag, Docker will use a tag called latest.


`docker push YOUR-USER-NAME/getting-started`
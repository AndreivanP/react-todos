FROM cypress/browsers:node14.17.0-chrome88-ff89

ENV WORKDIR=/runner/

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}/

RUN npm install
import * as faceapi from 'face-api.js';
import { detectFaceLandmarks } from 'face-api.js';
import _ from 'lodash'
import { aditya } from '../known-faces-descriptors/aditya';

const people = []
const recognizeFaces = (faceMatcher, faces) => {
    people.length = 0

    if (_.isEmpty(faces))
        return

    faces.forEach(face => {
        const bestMatch = faceMatcher.findBestMatch(face.descriptor)
        if (bestMatch._label !== 'unknown')
            people.push(bestMatch._label)
    });
}
export const getAllPeople = () => { return people }

const loop = (media) => {
    // const canvas = faceapi.createCanvasFromMedia(media)
    // document.getElementById('camera-view').appendChild(canvas)
    // canvas.style.position = 'absolute'
    // canvas.style.transform = 'rotateY(180deg)'

    // const displaySize = { width: media.videoWidth, height: media.videoHeight }
    // faceapi.matchDimensions(canvas, displaySize)


    const knownFacesDescriptors = [
        new faceapi.LabeledFaceDescriptors('Aditya', [aditya])
        // new faceapi.LabeledFaceDescriptors('Divesh', [])
    ]
    const faceMatcher = new faceapi.FaceMatcher(knownFacesDescriptors)

    setInterval(async () => {
        const detections = await faceapi
            .detectAllFaces(media, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks(true)
            .withFaceDescriptors()
        // const resizedDetections = faceapi.resizeResults(detections, displaySize)
        // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        // faceapi.draw.drawDetections(canvas, resizedDetections)

        recognizeFaces(faceMatcher, detections)
    }, 500)
}

export const initFaceApiFor = video => {
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models')
    ]).then(() => {
        navigator.getUserMedia(
            { video: true },
            stream => { video.srcObject = stream; },
            err => console.log(err)
        )
    })

    video.addEventListener('play', () => { loop(video) })
}
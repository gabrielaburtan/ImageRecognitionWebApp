import express = require("express");
import { MnistData } from "../utils/data";
import * as tf from '@tensorflow/tfjs';

const router = express.Router();
const IMAGE_WIDTH = 28;
const IMAGE_HEIGHT = 28;
const testDataSize = 1;
const modelPath = '../mlFiles/model.json';
const data = new MnistData();

router.get('/api/evaluate', async (request , response ) => {
    try
    {
        await data.load();
        const model = await tf.loadLayersModel(modelPath);
        const testData = data.nextTestBatch(testDataSize);
        const testxs = testData.xs.reshape([testDataSize, IMAGE_WIDTH, IMAGE_HEIGHT, 1]);
        const labels = testData.labels.argMax(-1);
        const preds = model.predict(testxs);
        testxs.dispose();
        response.status(200).send(preds + " " + labels);
    }
    catch(err)
    {
        console.log(err);
    }
});


export default router;
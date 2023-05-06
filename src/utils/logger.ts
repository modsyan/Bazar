import fs from "fs"
import path from "path"
import { pino } from "pino"
import PinoPretty from "pino-pretty"

const streams: {write: any}[] = [
]
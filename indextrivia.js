#!/usr/bin/env node
import { program } from "commander";
import {quiz} from "./quiz.js";

quiz()
program.parse(process.argv);

import { Router } from "express";
import { login , register , logout , profile} from "../controllers/auth.controller.js"

import {authRequired} from '../middlewares/validateToken.js';

const router = Router()

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)
// protegemos la ruta de perfil con el authrequired, si queremos proteger alguna otra ruta, con esta constante basta
router.get('/profile', authRequired, profile)

export default router 
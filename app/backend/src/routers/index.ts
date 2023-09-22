import { Router } from 'express';
import teamsRouter from './teams.routers';
import loginRouter from './login.routers';
import roleRouter from './role.routers';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', loginRouter);
router.use('/login', roleRouter);

export default router;

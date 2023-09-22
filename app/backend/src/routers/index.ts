import { Router } from 'express';
import teamsRouter from './teams.routers';
import loginRouter from './login.routers';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', loginRouter);

export default router;

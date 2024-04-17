import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  res.json({ ping: 'pong' });
});

/** Use routes list here
 * example: route.use("/some-url/v1/some-events", MainRoutes)
 */

export default router;

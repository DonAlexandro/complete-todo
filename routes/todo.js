const {Router} = require('express')
const {todoValidator, deleteTodoValidator} = require('../middlewares/validators')
const Todo = require('../models/todo')
const router = Router()

router.post('/create', todoValidator, async (req, res) => {
	try {
		const todo = new Todo({
			title: req.body.title
		})

		await todo.save()

		res.json({todo})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.get('/', async (req, res) => {
	try {
		const todos = await Todo.find()

		console.log(req.cookies)

		res.json({todos})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/delete', deleteTodoValidator, async (req, res) => {
	try {
		const {id} = req.body

		await Todo.deleteOne({_id: id})

		res.json({id})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/edit', async (req, res) => {
	try {
		const {id, title, done} = req.body

		const todo = await Todo.findById(id)

		if (!todo) {
			return res.status(400).json({error: 'task_not_found'})
		}

		const toChange = {
			title: title ? title : todo.title,
			done: done !== undefined ? done : todo.done
		}

		Object.assign(todo, toChange)

		await todo.save()

		res.json({todo})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

module.exports = router

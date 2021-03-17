const {Router} = require('express')
const {todoValidator, deleteTodoValidator} = require('../middlewares/validators')
const Todo = require('../models/todo')
const auth = require('../middlewares/auth')
const router = Router()

router.post('/create', auth, todoValidator, async (req, res) => {
	try {
		const todo = new Todo({
			title: req.body.title,
			author: req.user.userId
		})

		await todo.save()

		res.json({todo})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.get('/', auth, async (req, res) => {
	try {
		const perPage = 10
		const page = req.query.page || 1

		const todos = await Todo
			.find({author: req.user.userId})
			.skip((perPage * page) - perPage)
			.limit(perPage)

		const todosCount = await Todo.find({author: req.user.userId}).countDocuments()

		res.json({todos, todosCount})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/delete', auth, deleteTodoValidator, async (req, res) => {
	try {
		const {id} = req.body

		await Todo.deleteOne({
			_id: id,
			author: req.user.userId
		})

		res.json({id})
	} catch (e) {
		res.status(500).json({error: 'server_error'})
	}
})

router.post('/edit', auth, async (req, res) => {
	try {
		const {id, title, done} = req.body

		const todo = await Todo.findOne({
			_id: id,
			author: req.user.userId
		})

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

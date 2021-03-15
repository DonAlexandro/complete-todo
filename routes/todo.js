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
		res.status(500).json({error: 'Упс... щось пішло не так'})
	}
})

router.get('/', async (req, res) => {
	try {
		const todos = await Todo.find()

		res.json({todos})
	} catch (e) {
		res.status(500).json({error: 'Упс... щось пішло не так'})
	}
})

router.post('/delete', deleteTodoValidator, async (req, res) => {
	try {
		const {id} = req.body

		await Todo.deleteOne({_id: id})

		res.json({id})
	} catch (e) {
		res.status(500).json({error: 'Упс... щось пішло не так'})
	}
})

router.post('/edit', async (req, res) => {
	try {
		const {id, title, done} = req.body

		const todo = await Todo.findById(id)

		if (!todo) {
			return res.status(400).json({error: 'Завдвання не знайдено'})
		}

		const toChange = {
			title: title ? title : todo.title,
			done: done !== undefined ? done : todo.done
		}

		Object.assign(todo, toChange)

		await todo.save()

		res.json({todo})
	} catch (e) {
		res.status(500).json({error: 'Упс... щось пішло не так'})
	}
})

module.exports = router

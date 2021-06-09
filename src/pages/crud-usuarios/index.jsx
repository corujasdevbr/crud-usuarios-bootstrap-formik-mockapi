import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.css'
import axios from 'axios'
import { celularMask } from '../../utils/mask'

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const CrudUsers = () => {
    const [users, setUsers] = useState()
    const [show, setShow] = useState(false);

    const url = 'https://60a053e279c19b00174f0b3f.mockapi.io/v1/users'

    const handleClose = () => {
        formik.resetForm();
        setShow(false)
    }

    const handleShow = () => setShow(true);

    const validationSchema = Yup.object({
        email: Yup.string().email("Informe um email válido").required("Email é obrigatório"),
        name: Yup.string().required("Nome é obrigatório"),
        phone: Yup.string().required("Telefone é obrigatório"),
    });

    const formik = useFormik({
        initialValues: {
            id: 0,
            name: '',
            email: '',
            phone: '',
            createdAt: ''
        },
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            let urlMethod = (values.id === 0 ? url : `${url}/${values.id}`)
            let method = (values.id === 0 ? 'POST' : 'PUT')

            axios(urlMethod, {
                method: method,
                data: values
            }).then(() => {
                listUsers()
                toast.success((values.id === 0 ? "Usuário cadastrado" : "Usuário atualizado"));
                setSubmitting(false)
                handleClose();
            }).catch(erro => {
                console.error(erro)
            })
        },
    });

    useEffect(() => {
        listUsers();
    }, [])

    const listUsers = () => {
        fetch(url, {
            'method': 'GET'
        }).then(res => res.json())
            .then(res => {
                setUsers(res);
            })
    }

    const edit = (user) => {
        formik.setValues(user)
        setShow(true)
    }

    const remove = (id) => {
        confirmAlert({
            title: 'Remover Usuário',
            message: 'Deseja excluir o usuário?',
            buttons: [
                {
                    label: 'Não'
                },
                {
                    label: 'Sim',
                    onClick: () => {
                        axios.delete(`${url}/${id}`)
                            .then(() => {
                                toast.success("Usuário Removido");
                                listUsers();
                            })
                            .catch(erro => {
                                toast.error(erro)
                            })
                    }
                }
            ]
        });
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Gerenciamento de Usuários</h1>
                        <br />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th className="center">
                                        <Button onClick={handleShow} variant="primary">Novo</Button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{celularMask(user.phone)}</td>
                                                <td className="center">
                                                    <Button variant="warning" onClick={() => edit(user)}>Editar</Button>
                                                    <Button variant="danger" className="ml-20" onClick={() => remove(user.id)}>Remover</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dados do Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Preencha as informações abaixo
                    <br />
                    <Form>
                        <input
                            type="hidden"
                            id="id"
                            name="id"
                            value={formik.values.id}
                        />
                        <input
                            type="hidden"
                            id="createdAt"
                            name="createdAt"
                            value={formik.values.createdAt}
                        />
                        <Form.Group controlId="name">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name} />
                            {formik.touched.name && formik.errors.name ? (<div className="erro">{formik.errors.name}</div>) : null}
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                placeholder="name@example.com"
                                type="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} />
                            {formik.touched.email && formik.errors.email ? (<div className="erro">{formik.errors.email}</div>) : null}
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={celularMask(formik.values.phone)} />
                            {formik.touched.phone && formik.errors.phone ? (<div className="erro">{formik.errors.phone}</div>) : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={formik.handleSubmit}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </>
    )
}

export default CrudUsers
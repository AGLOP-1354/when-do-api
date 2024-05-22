const Account = require('../../models/account');

const controllers = {};

controllers.createAccount = async (req, res) => {
  const {
    socialId,
    userId,
    name,
    email,
    profileImage,
  } = req.body;

  const account = await Account.findOne({
    ...(socialId ? { socialId } : {}),
    ...(userId && !socialId ? { userId } : {}),
  });

  if (account && account._id) {
    res.send({
      status: 200,
      data: account,
    });
    return;
  }

  const result = await Account.create({
    socialId: socialId || '',
    userId: userId || '',
    name: name || '',
    email: email || '',
    description: '',
    profileImage: profileImage || '',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  });

  res.send({
    status: 200,
    data: result,
  });
}

controllers.updateAccount = async (req, res) => {
  const {
    userId,
    socialId,
    name,
    email,
    description,
    profileImage,
  } = req.body;

  const account = await Account.findOne({
    userId,
  });

  if (socialId) account.socialId = socialId;
  if (name) account.name = name;
  if (email) account.email = email;
  if (description) account.description = description;
  if (profileImage) account.profileImage = profileImage;

  await account.save();
  res.send({
    status: 200,
    data: account,
  });
}

controllers.getAccount = async (req, res) => {
  const { userId } = req.params;

  const result = await Account.findOne({
    userId,
    deletedAt: {
      $eq: null,
    },
  });

  res.send({
    status: 200,
    data: result,
  });
};

controllers.deleteAccount = async (req, res) => {
  const { userId } = req.body;
  const account = await Account.findOne({
    userId,
  });

  account.deletedAt = new Date();

  await account.save();

  res.send({
    status: 200,
    message: '계정이 삭제되었습니다.',
  });
}

module.exports = controllers;
